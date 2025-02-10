import { useState, useEffect } from "react";
import Card from "../components/Card";
import { fetchCards } from "../services/api";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function GamePage() {
  const [userCards, setUserCards] = useState([]);
  const [pcCards, setPcCards] = useState([]);
  const [selectedUserCard, setSelectedUserCard] = useState(null);
  const [selectedPcCard, setSelectedPcCard] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [roundMessage, setRoundMessage] = useState("");
  const [roundResult, setRoundResult] = useState(null); // to store current round result
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/api/user", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        setUsername(res.data.username);
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      try {
        const data = await fetchCards();
        const shuffled = data.sort(() => Math.random() - 0.5);
        // Deal 9 random cards to the user and 9 to the PC.
        setUserCards(shuffled.slice(0, 9));
        setPcCards(shuffled.slice(9, 18));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cards", error);
        setLoading(false);
      }
    };

    getCards();
  }, []);

  const handleCardPlay = (card) => {
    if (selectedUserCard || gameOver) return; // prevent multiple selections
    setSelectedUserCard(card);

    // PC randomly selects a card from its hand:
    const randomIndex = Math.floor(Math.random() * pcCards.length);
    const pcCard = pcCards[randomIndex];
    setSelectedPcCard(pcCard);

    let roundWinner = null;
    if (card.power > pcCard.power) {
      roundWinner = "user";
      setUserScore((prev) => prev + 1);
      setRoundMessage("You win this round!");
    } else if (card.power < pcCard.power) {
      roundWinner = "pc";
      setPcScore((prev) => prev + 1);
      setRoundMessage("PC wins this round!");
    } else {
      roundWinner = "tie";
      setRoundMessage("It's a tie round!");
    }

    // Set the round result for styling:
    setRoundResult({
      winner: roundWinner,
      userCardId: card.id,
      pcCardId: pcCard.id,
    });

    // Wait 1 second (to allow the flip animation and result highlighting to show)
    setTimeout(() => {
      setUserCards((prevUserCards) => {
        const newUserCards = prevUserCards.filter((c) => c.id !== card.id);
        if (newUserCards.length === 0) {
          setGameOver(true);
          determineWinner();
        }
        return newUserCards;
      });
      setPcCards((prevPcCards) =>
        prevPcCards.filter((c) => c.id !== pcCard.id)
      );
      setSelectedUserCard(null);
      setSelectedPcCard(null);
      setRoundResult(null);
      setRoundMessage("");
    }, 1000);
  };

  const determineWinner = async () => {
    let winner;
    if (userScore > pcScore) winner = "User";
    else if (userScore < pcScore) winner = "PC";
    else winner = "Tie";

    try {
      const res = await fetch("/api/game-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ winner, userScore, pcScore, username }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    }
  };

  const resetGame = () => {
    setLoading(true);
    setUserCards([]);
    setPcCards([]);
    setSelectedUserCard(null);
    setSelectedPcCard(null);
    setUserScore(0);
    setPcScore(0);
    setGameOver(false);
    setResult(null);
    setRoundMessage("");
    setRoundResult(null);
    fetchCards()
      .then((data) => {
        const shuffled = data.sort(() => Math.random() - 0.5);
        setUserCards(shuffled.slice(0, 9));
        setPcCards(shuffled.slice(9, 18));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-lime-400">
        Loading game...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-lime-400 mb-6 drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]">
          Card Battle
        </h1>
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <button
            className="px-4 py-2 bg-gray-800 border border-green-500 text-lime-400 font-bold rounded hover:bg-gray-700"
            onClick={() => navigate("/card-battle-leaderboard")}
          >
            Leaderboard
          </button>
        </div>
        <div className="flex justify-around mb-4">
          <div className="text-lime-400 text-xl">Player: {username}</div>
          <div className="text-lime-400 text-xl">User Score: {userScore}</div>
          <div className="text-lime-400 text-xl">PC Score: {pcScore}</div>
        </div>
        {roundMessage && (
          <div className="text-center text-2xl font-semibold text-yellow-400 mb-4">
            {roundMessage}
          </div>
        )}
        <div className="grid grid-cols-2 gap-8">
          {/* User's Cards (always face up) */}
          <div>
            <h2 className="text-2xl font-semibold text-lime-400 mb-2">
              Your Cards
            </h2>
            <div className="flex flex-wrap gap-4">
              {userCards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  onClick={() => handleCardPlay(card)}
                  selected={selectedUserCard && selectedUserCard.id === card.id}
                  flipped={selectedUserCard && selectedUserCard.id === card.id}
                  result={
                    roundResult && roundResult.userCardId === card.id
                      ? roundResult.winner === "user"
                        ? "win"
                        : roundResult.winner === "pc"
                        ? "lose"
                        : "tie"
                      : null
                  }
                />
              ))}
            </div>
          </div>
          {/* PC's Cards (always hidden until played) */}
          <div>
            <h2 className="text-2xl font-semibold text-lime-400 mb-2">
              PC Cards
            </h2>
            <div className="flex flex-wrap gap-4">
              {pcCards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  onClick={() => {}}
                  faceDown={true}
                  flipped={selectedPcCard && selectedPcCard.id === card.id}
                  result={
                    roundResult && roundResult.pcCardId === card.id
                      ? roundResult.winner === "pc"
                        ? "win"
                        : roundResult.winner === "user"
                        ? "lose"
                        : "tie"
                      : null
                  }
                />
              ))}
            </div>
          </div>
        </div>
        {gameOver && (
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold text-lime-400">
              {userScore > pcScore
                ? "Congratulations, You Won!"
                : userScore < pcScore
                ? "PC Wins!"
                : "It's a Tie!"}
            </h2>
            <button
              className="mt-4 px-6 py-2 bg-gray-800 border border-green-500 hover:bg-gray-700 text-lime-400 font-bold rounded"
              onClick={resetGame}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GamePage;

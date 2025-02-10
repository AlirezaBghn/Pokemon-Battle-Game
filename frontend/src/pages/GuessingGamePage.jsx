import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { pokeAPI, backendAPI } from "../services/api";
import axios from "axios";
import Cookies from "js-cookie";

function GuessingGamePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [guess, setGuess] = useState("");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [hintCount, setHintCount] = useState(0);
  const [hint, setHint] = useState("");
  const [details, setDetails] = useState(null);
  const [message, setMessage] = useState("");
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [username, setUsername] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();

  const fetchPokemonList = useCallback(async () => {
    try {
      const res = await pokeAPI.get("/pokemon?limit=100000&offset=0");
      setPokemonList(res.data.results);
      selectRandomPokemon(res.data.results);
    } catch (error) {
      console.error("Error fetching Pokémon list", error);
    }
  }, []);

  const fetchBestScore = useCallback(async (user) => {
    try {
      const res = await backendAPI.get("/leaderboard");
      const userRecord = res.data.find((entry) => entry.username === user);
      setBestScore(userRecord ? userRecord.score : 0);
    } catch (error) {
      console.error("Error fetching leaderboard best score", error);
    }
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/api/user", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        setUsername(res.data.username);
        fetchPokemonList();
        fetchBestScore(res.data.username);
      } catch (error) {
        console.error("Error fetching user", error);
      }
    };

    getUser();
  }, [fetchPokemonList, fetchBestScore]);

  // End game if wrongAttempts reaches 3
  const selectRandomPokemon = async (list) => {
    if (wrongAttempts >= 3) {
      setMessage("Game Over! You lost. Click Try Again to restart.");
      setGameOver(true);
      return;
    }
    const randomIndex = Math.floor(Math.random() * list.length);
    const selected = list[randomIndex];
    try {
      const res = await pokeAPI.get(`/pokemon/${selected.name}`);
      setCurrentPokemon(res.data);
      setHint("");
      setDetails(null);
    } catch (error) {
      console.error("Error fetching Pokémon details", error);
    }
  };

  const handleHint = async () => {
    if (hintCount >= 3) {
      setMessage("No more hints available!");
      return;
    }
    if (!details) {
      try {
        const res = await pokeAPI.get(
          `/pokemon-species/${currentPokemon.name}`
        );
        setDetails(res.data);
        setHint(
          `Hint: ${
            res.data.flavor_text_entries.find(
              (entry) => entry.language.name === "en"
            )?.flavor_text || "No hint available."
          }`
        );
      } catch (error) {
        console.error("Error fetching species details", error);
        setHint("No hint available.");
      }
    }
    setHintCount((prev) => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentPokemon) return;

    let newScore = score;
    if (guess.trim().toLowerCase() === currentPokemon.name.toLowerCase()) {
      newScore += 10;
      setMessage("Correct! +10 points");
      setWrongAttempts(0);
    } else {
      newScore -= 10;
      setWrongAttempts((prev) => prev + 1);
      setMessage(
        `Wrong! The correct answer was ${currentPokemon.name}. -10 points`
      );
    }

    setScore(newScore);

    if (newScore > bestScore) {
      setBestScore(newScore);
      try {
        await backendAPI.post("/leaderboard", { username, score: newScore });
      } catch (error) {
        console.error("Error saving score to leaderboard", error);
      }
    }

    if (wrongAttempts >= 3) {
      setMessage("Game Over! You lost. Click Try Again to restart.");
      setGameOver(true);
      return;
    }

    selectRandomPokemon(pokemonList);
  };

  const handleRestart = () => {
    setScore(0);
    setHintCount(0);
    setWrongAttempts(0);
    setMessage("");
    setHint("");
    setGameOver(false);
    fetchPokemonList();
  };

  if (!currentPokemon) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-md w-full bg-gray-900 border border-green-500 p-6 rounded shadow-xl text-lime-400">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Loading game...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Updated "View Leaderboard" button style */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate("/leaderboard")}
          className="px-4 py-2 bg-gray-800 border border-green-500 text-lime-400 font-bold rounded hover:bg-gray-700"
        >
          View Leaderboard
        </button>
      </div>
      <div className="max-w-md w-full bg-gray-900 border border-green-500 p-6 rounded shadow-xl text-lime-400">
        <h2 className="text-2xl font-bold mb-4 text-center drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]">
          Guess the Pokémon!
        </h2>
        <p className="mb-2 font-bold text-center">Best Score: {bestScore}</p>
        <div className="flex justify-center mb-4">
          <img
            src={currentPokemon.sprites.front_default}
            alt="pokemon"
            className="w-48 h-48 border-4 border-lime-400 rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
          />
        </div>
        <p className="mb-2 text-center">Score: {score}</p>
        <p className="mb-2 text-center">Wrong Attempts: {wrongAttempts} / 3</p>
        <p className="mb-2 text-center">Hints used: {hintCount} / 3</p>
        {hint && (
          <div className="bg-green-700 text-white p-2 mb-2 rounded text-center">
            {hint}
          </div>
        )}
        <div className="flex justify-center mb-4">
          <button
            onClick={handleHint}
            disabled={hintCount >= 3}
            className="bg-yellow-600 hover:bg-yellow-500 text-black p-2 rounded"
          >
            Get Hint
          </button>
        </div>
        {!gameOver ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Enter Pokémon name"
              className="border border-green-500 p-2 w-full mb-2 rounded bg-gray-800 text-lime-400 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-black p-2 rounded"
            >
              Submit Guess
            </button>
          </form>
        ) : (
          <button
            onClick={handleRestart}
            className="w-full bg-red-600 hover:bg-red-500 text-black p-2 rounded"
          >
            Try Again
          </button>
        )}
        {message && <p className="mt-4 font-bold text-center">{message}</p>}
        {currentPokemon && (
          <p className="mt-4 font-bold text-center">
            For practice, the correct answer is: {currentPokemon.name}
          </p>
        )}
      </div>
    </div>
  );
}

export default GuessingGamePage;

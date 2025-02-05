import React, { useState, useEffect } from "react";
import { pokeAPI, backendAPI } from "../services/api";

function GuessGame() {
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
  const [username, setUsername] = useState(
    () => localStorage.getItem("username") || ""
  );
  const [isUsernameSet, setIsUsernameSet] = useState(!!username);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (username) {
      fetchPokemonList();
      fetchBestScore(username);
    }
  }, [username]);

  const fetchPokemonList = async () => {
    try {
      const res = await pokeAPI.get("/pokemon?limit=100000&offset=0");
      setPokemonList(res.data.results);
      selectRandomPokemon(res.data.results);
    } catch (error) {
      console.error("Error fetching Pokémon list", error);
    }
  };

  const fetchBestScore = async (user) => {
    try {
      const res = await backendAPI.get("/leaderboard");
      const userRecord = res.data.find((entry) => entry.username === user);
      setBestScore(userRecord ? userRecord.score : 0);
    } catch (error) {
      console.error("Error fetching leaderboard best score", error);
    }
  };

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

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setIsUsernameSet(true);
      localStorage.setItem("username", username);
      fetchPokemonList();
      fetchBestScore(username);
    }
  };

  if (!currentPokemon || !isUsernameSet) {
    return (
      <div className="max-w-md w-full bg-retro-card p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          Enter your name to start the game:
        </h2>
        <form onSubmit={handleUsernameSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name"
            className="border p-2 w-full mb-2 rounded"
            required
          />
          <button type="submit" className="w-full">
            Start Game
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full bg-retro-card p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 ">Guess the Pokémon!</h2>
      <p className="mb-2 font-bold">Best Score: {bestScore}</p>
      <div className="flex justify-center mb-4">
        <img
          src={currentPokemon.sprites.front_default}
          alt="pokemon"
          className="w-48 h-48"
        />
      </div>
      <p className="mb-2">Score: {score}</p>
      <p className="mb-2">Wrong Attempts: {wrongAttempts} / 3</p>
      <p className="mb-2">Hints used: {hintCount} / 3</p>
      {hint && (
        <div className="bg-green-700 text-white p-2 mb-2 rounded">{hint}</div>
      )}
      <div className="flex space-x-2 mb-4">
        <button onClick={handleHint} disabled={hintCount >= 3}>
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
            className="border p-2 w-full mb-2 rounded"
            required
          />
          <button type="submit" className="w-full">
            Submit Guess
          </button>
        </form>
      ) : (
        <button
          onClick={handleRestart}
          className="w-full bg-red-500 text-white p-2 rounded"
        >
          Try Again
        </button>
      )}
      {message && <p className="mt-4 font-bold">{message}</p>}
      {currentPokemon && (
        <p className="mt-4 font-bold">
          For practice, the correct answer is: {currentPokemon.name}
        </p>
      )}
    </div>
  );
}

export default GuessGame;

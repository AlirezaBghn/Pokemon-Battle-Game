import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GuessGame from "./pages/GuessGame";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <Router>
      <nav className="bg-retroNeonBlue p-4">
        <div className="container mx-auto flex justify-between">
          <div className="flex space-x-4">
            <Link
              to="/"
              className="hover:underline text-retroNeonGreen font-bold"
            >
              Guess Game
            </Link>
            <Link
              to="/leaderboard"
              className="hover:underline text-retroNeonGreen font-bold"
            >
              Leaderboard
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex justify-center items-center min-h-screen bg-retroBlack">
        <div className="w-full flex justify-center items-center min-h-screen p-4">
          <Routes>
            <Route path="/" element={<GuessGame />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;

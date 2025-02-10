import React, { useState, useEffect } from "react";
import { backendAPI } from "../services/api";

const CardBattleLeaderboard = () => {
  const [gameResults, setGameResults] = useState([]);

  useEffect(() => {
    const fetchGameResults = async () => {
      try {
        const response = await backendAPI.get("/api/game-results");
        setGameResults(response.data);
      } catch (error) {
        console.error("Error fetching game results", error);
      }
    };

    fetchGameResults();
  }, []);

  // Aggregate counts:
  const pcWins = gameResults.filter(
    (result) => result.winner.toLowerCase() === "pc"
  ).length;
  const ties = gameResults.filter(
    (result) => result.winner.toLowerCase() === "tie"
  ).length;
  const pcLoses = gameResults.filter(
    (result) => result.winner.toLowerCase() === "user"
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center p-6 font-mono text-lime-400">
      <h1 className="text-5xl font-bold mb-8 drop-shadow-[0_0_10px_rgba(0,255,0,0.8)] text-center">
        Card Battle Leaderboard
      </h1>

      {/* Aggregated Summary */}
      <div className="grid grid-cols-3 gap-8 mb-8 w-full max-w-4xl">
        <div className="bg-gray-900 border-2 border-green-500 p-6 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-2">PC Wins</h2>
          <p className="text-4xl">{pcWins}</p>
        </div>
        <div className="bg-gray-900 border-2 border-green-500 p-6 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-2">Ties</h2>
          <p className="text-4xl">{ties}</p>
        </div>
        <div className="bg-gray-900 border-2 border-green-500 p-6 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-2">PC Loses</h2>
          <p className="text-4xl">{pcLoses}</p>
        </div>
      </div>

      {/* Detailed Game Results Table (without Date column) */}
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full table-auto bg-gray-900 rounded-lg shadow-xl border border-green-500">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-2 border-b border-green-500 text-center">
                Winner
              </th>
              <th className="px-4 py-2 border-b border-green-500 text-center">
                User Score
              </th>
              <th className="px-4 py-2 border-b border-green-500 text-center">
                PC Score
              </th>
            </tr>
          </thead>
          <tbody>
            {gameResults.map((result) => (
              <tr
                key={result._id}
                className="hover:bg-gray-800 transition-colors"
              >
                <td className="px-4 py-2 border-b border-green-500 text-center">
                  {result.winner}
                </td>
                <td className="px-4 py-2 border-b border-green-500 text-center">
                  {result.userScore}
                </td>
                <td className="px-4 py-2 border-b border-green-500 text-center">
                  {result.pcScore}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardBattleLeaderboard;

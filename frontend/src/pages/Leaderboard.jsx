import React, { useState, useEffect } from "react";
import { backendAPI } from "../services/api";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await backendAPI.get("/leaderboard");
        setLeaderboard(res.data);
      } catch (error) {
        console.error("Error fetching leaderboard", error);
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="max-w-5xl w-full bg-gray-900 p-12 rounded-xl shadow-2xl text-white mx-auto mt-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-retroNeonGreen">
        🎖️ Leaderboard
      </h2>

      {leaderboard.length === 0 ? (
        <p className="text-center text-gray-300 text-xl">No scores yet!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-lg">
            <thead>
              <tr className="bg-retroNeonBlue text-white text-xl">
                <th className="border px-6 py-4 text-center">🏆 Rank</th>
                <th className="border px-6 py-4">👤 Username</th>
                <th className="border px-6 py-4 text-center">💯 Score</th>
                <th className="border px-6 py-4 text-center">📅 Date</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr
                  key={entry._id}
                  className={`text-xl ${
                    index === 0
                      ? "bg-yellow-500 text-black font-bold"
                      : "bg-gray-800"
                  } hover:bg-gray-700`}
                >
                  <td className="border px-6 py-4 text-center">{index + 1}</td>
                  <td className="border px-6 py-4">{entry.username}</td>
                  <td className="border px-6 py-4 text-center">
                    {entry.score}
                  </td>
                  <td className="border px-6 py-4 text-center">
                    {new Date(entry.date).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;

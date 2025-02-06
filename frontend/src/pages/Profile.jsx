import React, { useState, useEffect } from "react";
import { backendAPI } from "../services/api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [bestScore, setBestScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/signin"); // Redirect to SignIn if no user is logged in
    } else {
      fetchBestScore();
    }
  }, [username]);

  const fetchBestScore = async () => {
    try {
      const res = await backendAPI.get("/leaderboard");
      const userRecord = res.data.find((entry) => entry.username === username);
      setBestScore(userRecord ? userRecord.score : 0);
    } catch (error) {
      console.error("Error fetching best score", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/signin");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-retroBlack text-retroNeonGreen">
      <div className="bg-retro-card p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-3xl font-bold mb-4">Profile</h2>
        <p className="text-xl">
          👤 Username: <span className="font-bold">{username}</span>
        </p>
        <p className="text-xl">
          🏆 Best Score: <span className="font-bold">{bestScore}</span>
        </p>
        <button
          onClick={handleLogout}
          className="w-full border-2 border-retroNeonGreen px-4 py-2 mt-4 hover:bg-retroNeonGreen hover:text-retroBlack transition-all"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;

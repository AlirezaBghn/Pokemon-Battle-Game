import React, { useState } from "react";
import { backendAPI } from "../services/api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("⚠️ Passwords do not match!");
      return;
    }

    try {
      const res = await backendAPI.post("/signup", { username, password });
      if (res.status === 201) {
        localStorage.setItem("username", username);
        navigate("/profile");
      } else {
        setMessage("⚠️ Sign-up failed. Try a different username.");
      }
    } catch (error) {
      console.error("Error signing up", error);
      setMessage("⚠️ Error creating account.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-retroBlack text-retroNeonGreen">
      <div className="bg-retro-card p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>
        {message && <p className="text-red-500 text-center mb-2">{message}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-retroNeonGreen text-retroNeonGreen rounded"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-retroNeonGreen text-retroNeonGreen rounded"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-retroNeonGreen text-retroNeonGreen rounded"
            required
          />
          <button
            type="submit"
            className="w-full border-2 border-retroNeonGreen px-4 py-2 hover:bg-retroNeonGreen hover:text-retroBlack transition-all"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User signed in with:", { username, password });
    // Here, you can send the credentials to your backend
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-retroBlack text-retroNeonGreen">
      <div className="bg-retro-card p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Username Input */}
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-retroNeonGreen text-retroNeonGreen rounded"
          />
          
          {/* Password Input */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-800 border border-retroNeonGreen text-retroNeonGreen rounded"
          />
          
          {/* Submit Button */}
          <button type="submit" className="w-full border-2 border-retroNeonGreen px-4 py-2 hover:bg-retroNeonGreen hover:text-retroBlack transition-all">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

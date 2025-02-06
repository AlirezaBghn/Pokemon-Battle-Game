import React from "react";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="border-4 border-neon-pink p-8 rounded-lg text-center shadow-neon">
        <h1 className="text-4xl font-pixel text-neon-cyan mb-4">Sign In</h1>
        <input
          type="text"
          placeholder="Username"
          className="block w-full p-2 mb-4 bg-black border-2 border-neon-cyan text-neon-cyan text-center font-pixel"
        />
        <input
          type="password"
          placeholder="Password"
          className="block w-full p-2 mb-4 bg-black border-2 border-neon-cyan text-neon-cyan text-center font-pixel"
        />
        <button className="w-full p-2 bg-neon-pink text-black font-pixel text-lg hover:bg-neon-cyan transition">
          ENTER
        </button>
      </div>
    </div>
  );
};

export default SignIn;

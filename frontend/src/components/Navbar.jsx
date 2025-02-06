import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-retroNeonBlue p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline text-retroNeonGreen font-bold">
            Guess Game
          </Link>
          <Link to="/leaderboard" className="hover:underline text-retroNeonGreen font-bold">
            Leaderboard
          </Link>
          <Link to="/signin" className="hover:underline text-retroNeonGreen font-bold">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

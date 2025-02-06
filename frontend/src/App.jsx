import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GuessGame from "./pages/GuessGame";
import Leaderboard from "./pages/Leaderboard";
import SignIn from "./pages/SignIn"; // ✅ Import SignIn correctly
import Navbar from "./components/Navbar"; // ✅ Import Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Use Navbar */}
      {/* Main Content */}
      <main className="flex justify-center items-center min-h-screen bg-retroBlack">
        <div className="w-full flex justify-center items-center min-h-screen p-4">
          <Routes>
            <Route path="/" element={<GuessGame />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/signin" element={<SignIn />} /> {/* ✅ Add SignIn Route */}
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;

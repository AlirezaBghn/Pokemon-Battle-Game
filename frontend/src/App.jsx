import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import GameSelectionPage from "./pages/GameSelectionPage.jsx";
import GuessGame from "./pages/GuessGame.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import BattleGamePage from "./pages/BattleGamePage.jsx"; // Import BattleGamePage
import BattleGameLeaderboardPage from "./pages/BattleGameLeaderboardPage.jsx"; // Import BattleGameLeaderboardPage
import AuthenticatedLayout from "./layouts/AuthenticatedLayout.jsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* All routes below require authentication */}
        <Route element={<AuthenticatedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/game-selection" element={<GameSelectionPage />} />
          <Route path="/guessing-game" element={<GuessGame />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/battle-game" element={<BattleGamePage />} />{" "}
          {/* Add BattleGamePage route */}
          <Route
            path="/battle-game-leaderboard"
            element={<BattleGameLeaderboardPage />}
          />{" "}
          {/* Add BattleGameLeaderboardPage route */}
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

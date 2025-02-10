import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import UploadPage from "./pages/UploadPage";
import GameSelectionPage from "./pages/GameSelectionPage";
import GuessingGamePage from "./pages/GuessingGamePage";
import Leaderboard from "./pages/Leaderboard";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import CardBattleLeaderboard from "./pages/CardBattleLeaderboard";
import SignOutButton from "./components/SignOutButton";
import Cookies from "js-cookie";
import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return (
    <>
      <SignOutButton />
      {children}
    </>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!Cookies.get("token")
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path="/game"
            element={
              <RequireAuth>
                <GamePage />
              </RequireAuth>
            }
          />
          <Route
            path="/upload"
            element={
              <RequireAuth>
                <UploadPage />
              </RequireAuth>
            }
          />
          <Route
            path="/game-selection"
            element={
              <RequireAuth>
                <GameSelectionPage />
              </RequireAuth>
            }
          />
          <Route
            path="/guessing-game"
            element={
              <RequireAuth>
                <GuessingGamePage />
              </RequireAuth>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <RequireAuth>
                <Leaderboard />
              </RequireAuth>
            }
          />
          <Route
            path="/card-battle-leaderboard"
            element={
              <RequireAuth>
                <CardBattleLeaderboard />
              </RequireAuth>
            }
          />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;

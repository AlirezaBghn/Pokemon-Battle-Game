import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <h1 className="text-5xl font-bold text-lime-400 mb-8 drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]">
        Welcome to Card Battle
      </h1>
      <button
        className="px-8 py-4 bg-gray-800 border border-green-500 text-lime-400 font-bold rounded-full shadow-xl hover:bg-gray-700 transition"
        onClick={() => navigate("/game-selection")}
      >
        Start Game
      </button>
    </div>
  );
}

export default HomePage;

import mongoose from "mongoose";

const gameResultSchema = new mongoose.Schema({
  winner: {
    type: String,
    required: true,
    enum: ["User", "PC", "Tie"],
  },
  userScore: { type: Number, required: true },
  pcScore: { type: Number, required: true },
  playedAt: { type: Date, default: Date.now },
});

const GameResult = mongoose.model("GameResult", gameResultSchema);
export default GameResult;

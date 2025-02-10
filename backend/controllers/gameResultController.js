import asyncHandler from "../utils/asyncHandler.js";
import GameResult from "../models/GameResult.js";

// POST /api/game-results
export const saveGameResult = asyncHandler(async (req, res) => {
  const { winner, userScore, pcScore } = req.body;
  if (!winner || userScore === undefined || pcScore === undefined) {
    res.status(400);
    throw new Error("Please provide winner, userScore, and pcScore");
  }

  const gameResult = await GameResult.create({ winner, userScore, pcScore });
  res.status(201).json(gameResult);
});

// GET /api/game-results
export const getAllGameResults = asyncHandler(async (req, res) => {
  const gameResults = await GameResult.find().sort({ createdAt: -1 });
  res.json(gameResults);
});

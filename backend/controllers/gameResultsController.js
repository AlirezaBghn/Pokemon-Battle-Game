import GameResult from "../models/gameResultModel.js";

export const saveGameResult = async (req, res) => {
  const { winner, userScore, pcScore, username, gameType } = req.body;
  try {
    const gameResult = new GameResult({
      winner,
      userScore,
      pcScore,
      username,
      gameType, // Add gameType to the model
    });
    await gameResult.save();
    res.status(200).json({ message: "Game result saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error saving game result", error });
  }
};

export const getGameResults = async (req, res) => {
  const { gameType } = req.query; // Get gameType from query parameters
  try {
    const gameResults = await GameResult.find(gameType ? { gameType } : {});
    res.status(200).json(gameResults);
  } catch (error) {
    res.status(500).json({ message: "Error fetching game results", error });
  }
};

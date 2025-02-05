import Leaderboard from "../models/LeaderboardModel.js";

export async function getLeaderboard(req, res) {
  try {
    const leaderboard = await Leaderboard.find().sort({ score: -1 });
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
}

export async function createScore(req, res) {
  try {
    const { username, score } = req.body;
    const newEntry = new Leaderboard({ username, score });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
}

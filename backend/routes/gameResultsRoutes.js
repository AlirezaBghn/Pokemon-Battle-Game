import express from "express";
import {
  saveGameResult,
  getGameResults,
} from "../controllers/gameResultsController.js";

const router = express.Router();

router.post("/", saveGameResult);
router.get("/", getGameResults); // Add GET route for fetching game results

export default router;

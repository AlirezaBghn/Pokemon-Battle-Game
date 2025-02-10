import express from "express";
import {
  saveGameResult,
  getAllGameResults,
} from "../controllers/gameResultController.js";

const router = express.Router();

router.post("/", saveGameResult);
router.get("/", getAllGameResults);

export default router;

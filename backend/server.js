import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";
import { notFound, errorHandler } from "./utils/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
import cardsRoutes from "./routes/cardsRoutes.js";
import gameResultsRoutes from "./routes/gameResultsRoutes.js";
import chatRouter from "./routes/chatRouter.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();

connectDB();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/uploads", express.static("uploads"));


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "frontend/build")));

app.use("/api", authRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/cards", cardsRoutes);
app.use("/api/game-results", gameResultsRoutes);
app.use("/api/pokemonAI", chatRouter);

app.get("/", (req, res) => {
  res.send("Hello from the Pokémon Battle Game backend!");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

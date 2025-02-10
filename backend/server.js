// backend/server.js
import gameResultRoutes from "./routes/gameResultRoutes.js";
import cardsRoutes from "./routes/cardsRoutes.js";
import uploadRoutes from "./routes/upload.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
import authRouter from "./routes/authRouter.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js"; // if you use a database; otherwise, you can remove this line
import errorHandler from "./middleware/errorHandler.js"; // your custom error handler

dotenv.config();
const app = express();

connectDB(); // Connect to your DB if needed

app.use(cors());
app.use(express.json());

// Serve static files from the "uploads" folder
app.use("/uploads", express.static("uploads"));

// Mount the upload routes under the "/api" path
app.use("/api", uploadRoutes);
app.use("/api", authRouter);

// cards
app.use("/api/game-results", gameResultRoutes);
app.use("/api/cards", cardsRoutes);
app.use("/leaderboard", leaderboardRoutes);

// Error handling middleware (should be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

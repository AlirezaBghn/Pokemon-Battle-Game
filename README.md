# Pokemon Battle Game

## Overview

Pokemon Battle Game is a simple game where players can battle their Pokemon against PC. The game is built using Express , Mongoose , JavaScript , React , vite and Tailwinds.

There are two games included:

1. **Guessing Game Card**: A game where players guess the Pokemon card.
2. **Card Game**: A card game similar to the Persian casino card game.

## Features

- Choose your Pokemon
- Battle against other Pokemon
- View battle results

## Installation

### Frontend

1. Clone the repository:

   git clone https://github.com/yourusername/Pokemon-Battle-Game.git

2. Navigate to the frontend directory:

   cd Pokemon-Battle-Game/frontend

3. Install dependencies:

   npm install

### Backend

1. Navigate to the backend directory:

   cd Pokemon-Battle-Game/backend

2. Install dependencies:

   npm install

## Usage

### Frontend

1. Start the frontend:

   npm start

2. Open your browser and navigate to `http://localhost:${port}`.

### Backend

1. Start the backend:

   npm start

2. The backend will run on `http://localhost:${port}`.

## Environment Variables

The project uses a `.env` file to manage environment variables. Create a `.env` file in the root directory of the backend with the following content:

```
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

Replace `your_database_url` and `your_jwt_secret` with your actual database URL and JWT secret.

## Directory Structure

```
/C:/Users/a/OneDrive/Desktop/pokemon repo/Pokemon-Battle-Game/
├── .gitignore
├── README.md
├── .env
├── frontend/
│   ├── .gitignore
│   ├── package.json
│   ├── src/
│   │   ├── index.html
│   │   ├── App.jsx
│   │   ├── main.js
│   │   ├── styles.css
│   │   ├── components/
│   │   │   ├── SignOutButton.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── PokemonCard.jsx
│   │   │   ├── BattleButton.jsx
│   │   │   └── LeaderboardTable.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── GamePage.jsx
│   │   │   ├── UploadPage.jsx
│   │   │   ├── GameSelectionPage.jsx
│   │   │   ├── GuessingGamePage.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   ├── SignInPage.jsx
│   │   │   ├── SignUpPage.jsx
│   │   │   └── CardBattleLeaderboard.jsx
│   └───│
│
├── backend/
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   ├── routes/
│   │   ├── gameResultRoutes.js
│   │   ├── cardsRoutes.js
│   │   ├── upload.js
│   │   ├── leaderboardRoutes.js
│   │   └── authRouter.js
│   ├── controllers/
│   │   ├── gameResultController.js
│   │   ├── cardsController.js
│   │   ├── uploadController.js
│   │   ├── leaderboardController.js
│   │   └── authController.js
│   ├── db/
│   │   └── db.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── uploads/
│   │   ├── images/
│   │   │   ├── pokemon1.png
│   │   │   ├── pokemon2.png
│   │   │   └── // other images
│   │   └── // other uploaded files
│   ├── utils/
│   │   ├── asyncHandler.js
│   └── └── ErrorResponse.js
└── node_modules/

```

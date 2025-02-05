# Pokemon Game Project

## Project Overview

This project is a Pokemon game that includes both frontend and backend components. The frontend is built using modern web technologies, while the backend is powered by a robust server-side framework. The game allows users to interact with Pokemon characters, battle, and manage their Pokemon collection.

## Directory Structure

```
Pokemon.game/
├── Project/
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── App.js
│   │   │   └── index.js
│   │   ├── public/
│   │   │   ├── index.html
│   │   │   └── ...
│   │   ├── package.json
│   │   └── ...
│   ├── backend/
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   └── server.js
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── ...
│   │   ├── package.json
│   │   └── ...
│   └── README.md
```

- **frontend/**: Contains the frontend code of the project.

  - **src/**: Source code for the frontend.
    - **components/**: React components.
    - **pages/**: React pages.
    - **App.js**: Main App component.
    - **index.js**: Entry point of the frontend application.
  - **public/**: Public assets for the frontend.
    - **index.html**: Main HTML file.
  - **package.json**: Lists frontend dependencies and scripts.

- **backend/**: Contains the backend code of the project.
  - **src/**: Source code for the backend.
    - **controllers/**: Controllers for handling requests.
    - **models/**: Database models.
    - **routes/**: API routes.
    - **server.js**: Entry point of the backend application.
  - **config/**: Configuration files for the backend.
    - **db.js**: Database configuration.
  - **package.json**: Lists backend dependencies and scripts.

## Dependencies

### Frontend

- React
- Redux
- Axios
- React Router

### Backend

- Express
- Mongoose
- dotenv
- cors

## Installation

### Frontend

1. Navigate to the frontend directory:
   ```sh
   cd Project/frontend
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```

### Backend

1. Navigate to the backend directory:
   ```sh
   cd Project/backend
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```

## Running the Project

1. Ensure both frontend and backend servers are running.
2. Open your browser and navigate to the frontend server (usually `http://localhost:3000`).

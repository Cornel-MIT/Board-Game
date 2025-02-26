# Memory Game (6x6 Grid)

This is a memory card game built with React.js for the frontend and Node.js for the backend. The game consists of a 6x6 grid of cards with numbers at the back. The objective is to find matching pairs of numbers.

## Features

- **6x6 grid of cards**: The game is played with 36 cards arranged in a 6x6 grid.
- **Memory challenge**: Flip two cards at a time to match the numbers on their backs.
- **React frontend**: Built with React.js for a dynamic and interactive user interface.
- **Node.js backend**: Utilizes Node.js to handle server-side logic.

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the repository

```bash
git clone https://github.com/Cornel-MIT/Board-Game
cd Board-Game
```

### Install dependencies

```bash
npm install
```

### Start the server in src/backend:

```bash
node index.js
```

### Start the frontend React application:

```bash
npm start
```


## Game Rules

- The grid consists of 36 cards, arranged in a 6x6 layout.
- Each card has a number on its back.
- Flip two cards at a time to try and find matching pairs.
- If the cards match, they remain face-up.
- If the cards do not match, they flip back face-down.
- The goal is to match all pairs of cards in the least number of moves.

## Technologies Used

- **Frontend**: React.js, CSS
- **Backend**: Node.js (Express, if used for API)
- **State Management**: React hooks (`useState`, `useEffect`)
- **Styling**: Custom CSS for layout and animation

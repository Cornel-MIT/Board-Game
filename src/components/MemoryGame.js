import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  // Fetching cards from the backend
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cards');
        console.log(response.data);
        setCards(response.data);
        setGameOver(false);  // Reset game over flag when new cards are loaded
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []); 

  // Effect to handle card flips
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.value === secondCard.value) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.value === firstCard.value ? { ...card, isMatched: true } : card
          )
        );
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) => ({ ...card, isFlipped: false }))
          );
        }, 1000);
      }
      setFlippedCards([]); // Clear flipped cards
    }
  }, [flippedCards]);

  // Effect to check if all cards are matched (Game over condition)
  useEffect(() => {
    if (cards.every((card) => card.isMatched)) {
      setGameOver(true);
    }
  }, [cards]);

  // Handle card click
  const handleCardClick = (id) => {    
    setCards((prevCards) =>
      prevCards.map((card) =>
        
        card.id === id && !card.isFlipped && !card.isMatched
          ? { ...card, isFlipped: true }
          : card
      )
    );
    const flippedCard = cards.find((card) => card.id === id);
    setFlippedCards((prev) => [...prev, flippedCard]);
  };

  // Restart the game by resetting the cards and gameOver state
  const handleRestart = () => {
    setGameOver(true);
    setFlippedCards([]);
    setCards((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        isFlipped: false,
        isMatched: false,
      }))
    );
  };

  return (
    <div className="memory-game">
      {gameOver ? (
        <div className="game-over">
          <h2>Game Over! You won!</h2>
          <button className='reset-btn' onClick={handleRestart}>Restart Game</button>
        </div>
      ) : (
        <div className="card-container">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              onClick={handleCardClick}
              isFlipped={card.isFlipped}
              isMatched={card.isMatched}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MemoryGame;

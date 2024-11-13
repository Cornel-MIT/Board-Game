import React from 'react';

const Card = ({ card, onClick, isFlipped, isMatched }) => {
  const handleClick = () => {
    console.log(isFlipped);
    console.log(card);
    
    
    if (!isFlipped && !isMatched) {
      onClick(card.id);
    }
  };

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''}  ${isMatched ? 'matched' : ''}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          {isFlipped || isMatched ? (
            <span className="card-number">{card.value}</span>
            // <span className="card-number">k</span>
          ) : (
            <span className="card-placeholder">?</span>
          )}
        </div>
  
      </div>
    </div>
  );
};

export default Card;

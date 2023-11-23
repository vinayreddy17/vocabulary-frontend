import React, { useState } from 'react';
import './Card.css';

function Card({ frontContent, backContent }) { // props front contenr and back content 
  const [isFlipped, setIsFlipped] = useState(false);  

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={toggleFlip}>
      <div className="front">{isFlipped ? backContent : frontContent}</div>
      {/* <div className="back">{backContent}</div> */}
     
      
    </div>
  );
}

export default Card;

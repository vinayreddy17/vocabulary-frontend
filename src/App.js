import React from 'react';
import './App.css';
import Card from './Card';

const cardData = [
  { frontContent: 'card3', backContent: 'Back of Card 1' },
  { frontContent: 'Card 2', backContent: 'Back of Card 2' },
  // Add more card data as needed
];

function App() {
  return (
    <div className="App">
      {cardData.map((card, index) => (
        <Card key={index} frontContent={card.frontContent} backContent={card.backContent} />
      ))}
    
    </div>
  );
}

export default App;

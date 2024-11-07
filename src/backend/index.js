const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());

const generateShuffledCards = () => {
  const values = Array.from({ length: 18 }, (_, i) => i + 1); 
  const deck = [...values, ...values] 
    .map((value) => ({
      id: uuidv4(),
      value,
      isFlipped: false,
      isMatched: false,
    }))
    .sort(() => Math.random() - 0.5); 

  return deck;
};

app.get('/api/cards', (req, res) => {
  const cards = generateShuffledCards();
  res.json(cards); 
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

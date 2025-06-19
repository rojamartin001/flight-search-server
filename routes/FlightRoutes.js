const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataPath = path.join(__dirname, '../data/flights.json');

// GET all flights
router.get('/', (req, res) => {
  const flights = JSON.parse(fs.readFileSync(dataPath));
  res.json(flights);
});

// POST a new flight
router.post('/', (req, res) => {
  const flights = JSON.parse(fs.readFileSync(dataPath));
  const newFlight = req.body;

  flights.push(newFlight);
  fs.writeFileSync(dataPath, JSON.stringify(flights, null, 2));
  res.status(201).json({ message: 'Flight added successfully' });
});

module.exports = router;

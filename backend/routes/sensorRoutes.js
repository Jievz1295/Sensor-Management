// routes/sensorRoutes.js
const express = require('express');
const Sensor = require('../models/Sensor');

const router = express.Router();

// Create a new sensor
router.post('/sensors', async (req, res) => {
  try {
    const sensor = await Sensor.create(req.body);
    res.status(201).json(sensor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all sensors
router.get('/sensors', async (req, res) => {
  try {
    const sensors = await Sensor.find();
    res.json(sensors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Other routes: GET, PUT, DELETE

module.exports = router;

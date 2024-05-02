// models/Sensor.js
const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  type: { type: String, required: true },
  capabilities: { type: String, required: true },
  status: { type: String, required: true },
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;

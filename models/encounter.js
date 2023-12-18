const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patient_id: { type: String, required: true },
  date_time: { type: Date, required: true },
  encounter_type: { type: String, required: true },
});

module.exports = mongoose.model('Encounter', encounterSchema);
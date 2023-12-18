const moongose = require('mongoose');


const patientSchema = new mongoose.Schema({
    patient_id: { type: String, required: true },
    surname: { type: String, required: true },
    othernames: { type: String, required: true },
    gender: { type: String, required: true },
    phone_number: { type: String, required: true },
    residential_address: { type: String, required: true },
    emergency_name: { type: String, required: true },
    emergency_contact: { type: String, required: true },
    relationship: { type: String, required: true },
  });
  
  module.exports = mongoose.model('Patient', patientSchema);
const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const Patient = require('./models/patients');
const Encounter = require('./models/patients')


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

mongoose.connect('mongodb+srv://Sean:littlestupidassbitch@cluster0.tcleifi.mongodb.net/Node-API?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.post('/api/patients/register', async (req, res) => {
    try {
      const newPatient = await Patient.create(req.body);
      res.status(201).json(newPatient);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
  
  app.post('/api/encounters/start', async (req, res) => {
    try {
      const newEncounter = await Encounter.create(req.body);
      res.status(201).json(newEncounter);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running`);
});
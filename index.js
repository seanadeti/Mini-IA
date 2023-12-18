const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

mongoose.connect('mongodb+srv://Sean:littlestupidassbitch@cluster0.tcleifi.mongodb.net/Node-API?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


app.listen(3000, () => {
  console.log(`Server is running`);
});
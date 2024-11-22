const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Curly Pancake Server!');
  });

app.listen(PORT, () => {
console.log(`Server listening on http://localhost:${PORT}`);
});
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT;

dotenv.config();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Curly Pancake Server!');
  });

server.listen(PORT, () => {
console.log(`Server listening on http://localhost:${PORT}`);
});
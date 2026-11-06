console.log("Début du server toto.js");
//Express
const express = require('express');

const app = express();
const port = 3000;

//chargement de page static
app.use(express.static('public'));  


app.get('/titi', (req, res) => {
  console.log("Route /titi appelée");
  res.send('<html><body><h1>Bonjour titi</h1></body></html>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://Akkai:Akkaii04@@cluster0.77etvto.mongodb.net/?retryWrites=true&w=majority');

app.use(express.static('static'));

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

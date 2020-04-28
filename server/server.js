const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express();
const port = process.env.PORT || 3001;

const DATA_PATH = path.join(path.dirname(__filename), 'menu.json')

app.listen(port, () => console.log(`Listening on port ${port}`));

const read_file = () => {
  const data = fs.readFileSync(DATA_PATH)
  return JSON.parse(data)['menu']['pizza']
}

app.get('/pizza', (req, res) => {
  const data = read_file()
  res.send(data);
});

app.get('/pizza/sizes', (req, res) => {
  console.log(read_file()['sizes'])
  res.send(read_file()['sizes']);
});

app.get('/pizza/crusts', (req, res) => {
  res.send(read_file()['crusts']);
});

app.get('/pizza/toppings', (req, res) => {
  res.send(read_file()['toppings']);
});

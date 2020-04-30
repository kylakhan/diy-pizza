const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express();
const port = process.env.PORT || 3001;


const DATA_PATH = path.join(path.dirname(__filename), 'menu.json')

app.listen(port, () => console.log(`Listening on port ${port}`));

const readFile = () => {
    const data = fs.readFileSync(DATA_PATH)
    return JSON.parse(data)
}

app.get('/pizza', (req, res) => {
    const data = readFile()
    res.send(data);
});

app.get('/pizza/sizes', (req, res) => {
    res.send(readFile()['menu']['pizza']['sizes']);
});

app.get('/pizza/crusts', (req, res) => {
    res.send(readFile()['menu']['pizza']['crusts']);
});

app.get('/pizza/toppings', (req, res) => {
    res.send(readFile()['menu']['pizza']['toppings']);
});

app.get('/currency', (req, res) => {
    res.send({'currency': readFile()['currency']});
});

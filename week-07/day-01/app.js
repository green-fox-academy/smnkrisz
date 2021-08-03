// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

app.use(express.static('assets'));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(), 'index.html'));

});

// doubling
app.get('/doubling', (req, res) => {
    let input = req.query.input;
    if (req.query.input === undefined) {
        res.send(JSON.stringify({
            "error": "Please provide an input!"
        }));
    } else {
        res.send(JSON.stringify({ 
            "received": Number(input),
            "result": Number(input) * 2
        }));
    }
});

// greeter
app.get('/greeter', (req, res) => {
    let name = req.query.name;
    let title = req.query.title;
    if (name === undefined && title === undefined) {
        res.status(400).send(JSON.stringify({
            "error": "Please provide a name and a title!"
        }));
    } else if (name !== undefined && title === undefined) {
        res.status(400).send(JSON.stringify({
            "error": "Please provide a title!"
        }));
    } else if (name === undefined && title !== undefined) {
        res.status(400).send(JSON.stringify({
            "error": "Please provide a name!"
        }));
    } else {
        res.send(JSON.stringify({
            "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
        }));
    }
});

// append-a
app.get('/appenda/:appendable', (req, res) => {
    if (req.params.appendable === undefined) {
        res.status(404);
    } else {
        res.send(JSON.stringify({
            "appended": `${req.params.appendable}a`
        }));
    }
});

// do-until
app.post('/dountil/:operation', (req, res) => {
    let until = req.body.until;
    let action = req.params.operation;
    if (action === 'sum') {
        let sum = 0;
        for (let i = 0; i <= until; i++) {
            sum += i;
        } res.send(JSON.stringify({
            "result": sum
        }));
    } else if (action === 'factor') {
        let factor = 1;
        for (let j = 1; j <= until; j++) {
            factor *= j;
        } res.send(JSON.stringify({
            "result": factor
        }));
    } else {
        res.send(JSON.stringify({
            "error": "Please provide a number!"
        }));
    }
});

app.listen(PORT);
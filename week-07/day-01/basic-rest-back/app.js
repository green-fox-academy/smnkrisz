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

app.listen(PORT);
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const todos = ['get up', 'finish demo', 'practice more'];

app.get('/todo', (req, res) => {
    res.render('todo', { todos });
});

app.listen(port);
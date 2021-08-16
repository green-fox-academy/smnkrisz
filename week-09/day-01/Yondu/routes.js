const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
    const distance = req.query.distance
    const time = req.query.time
    const speed = distance / time

    if (distance && time) {
        const response = {
            distance: `${distance}`,
            time: `${time}`,
            speed: `${speed}`
        }
        res.status(200).send(response)
    } else if (time === 0) {
        res.status(400).send({ error: `can't devide with 0` })
    } else {
        res.status(400).send({ error: 'wrong parameters' })
    }
});

module.exports = app;
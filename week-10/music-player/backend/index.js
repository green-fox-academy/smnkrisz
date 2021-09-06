import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
const PORT = 3000

dotenv.config()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: process.env.KRSZ_HOST,
    user: process.env.KRSZ_USER,
    password: process.env.KRSZ_PSSWRD,
    database: process.env.KRSZ_DB
})

db.connect(err => {
    if (err) {
        console.log('Cannot connect to database.');
    } else {
        console.log('Connection established.');
    }
});

app.get('/playlists', (req, res) => {
    db.query('SELECT * FROM playlists;', (err, rows) => {
        if (err) {
            res.status(400).json()
        } else {
            res.status(200).json(rows)
        }
    })
})

app.get('/playlist-tracks', (req, res) => {

})

app.listen(PORT, console.log(`Listening on ${PORT}`));
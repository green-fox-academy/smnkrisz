import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors())
dotenv.config();
app.use(express.json());

const conn = mysql.createConnection({
    host: process.env.KRSZ_HOST,
    user: process.env.KRSZ_USER,
    password: process.env.KRSZ_PSSWRD,
    database: process.env.KRSZ_DB
});

conn.connect(err => {
    if (err) {
        console.log('Cannot connect to database.');
    } else {
        console.log('Connection established.');
    }
});

app.get('/posts', (req, res) => {
    conn.query(`SELECT * FROM posts;`, (err, rows) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.status(200).json({ "posts:": rows });
        }
    });
});

app.post('/posts', (req, res) => {
    const newTitle = req.body.title;
    const newURL = req.body.url;
    const currentEpoch = Math.floor(Date.now() / 1000);
    conn.query(`INSERT INTO posts (title, url, timestamp) VALUES (?, ?, ?);`,
        [newTitle, newURL, currentEpoch], (err, newPost) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                res.status(200).send(JSON.stringify(newPost));
            }
        });
});

app.put('/posts/:id/upvote', (req, res) => {
    conn.query('UPDATE posts SET score = score + 1 WHERE id=?;',
        [req.params.id], (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json(result);
            }
        });
});

app.put('/posts/:id/downvote', (req, res) => {
    conn.query('UPDATE posts SET score = score - 1 WHERE id=?;',
        [req.params.id], (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json(result);
            }
        });
});

app.put('/posts/:id', (req, res) => {
    const modifydTitle = req.body.title;
    const modifydURL = req.body.url;
    const id = req.params.id;
    conn.query('UPDATE posts SET title = ?, url = ? WHERE id=?;',
        [modifydTitle, modifydURL, id], (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json(result);
            }
        });
});

app.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    conn.query('DELETE FROM posts WHERE id=?;',
        [id], (error, result) => {
            if (error) {
                res.status(500).json(error);
            } else {
                res.status(200).json(result);
            }
        });
});

app.listen(PORT);
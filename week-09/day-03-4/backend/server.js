import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
const PORT = 8080

dotenv.config()
app.use(express.json())
app.use(cors())

app.use('/game', express.static('frontend/game.html'))
app.use('/questions', express.static('frontend/questions.html'))

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

app.get('/api/game', (req, res) => {
    db.query('SELECT * FROM questions;', (err, result) => {
        let questionLength = result.length
        let randomQ = Math.floor(Math.random() * questionLength)
        if (err) {
            console.log(err)
            res.send(404)
        } else {
            res.status(200).json(result[randomQ])
        }
    })
})

app.get('/api/questions', (req, res) => {
    db.query('SELECT * FROM questions;', (err, result) => {
        if (err) {
            console.log(err)
            res.send(404)
        } else {
            res.status(200).json(result)
        }
    })
})

app.post('/api/questions', async (req, res) => {
    const question = req.body.question
    const answers = req.body.answers

    db.query('INSERT INTO questions (question) VALUES ?;', [question], (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        }
        const questionInsertId = result.insertId
        answers.foreach(async (answer, index) => {
            try {
                const queryString = 'INSERT INTO answers (question_id, answer, is_correct) VALUES (?, ?, ?);'
                const answerSting = `answer_${index + 1}`
                await db.promise().query(queryString, [questionInsertId, answer[answerSting], answer.is_correct])
            } catch (error) {
                console.log(error)
                res.sendStatus(500)
            }
        })
        res.status(200).json()
    })
})

app.listen(PORT);
import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import { all } from 'proxy-addr';

const app = express();
const PORT = 3000;

dotenv.config();
app.use(express.json());

const conn = mysql.createConnection({
    host: 'localhost',
    user: process.env.KRSZ_USER,
    password: process.env.KRSZ_PSSWRD,
    database: 'bookinfo'
});

conn.connect(err => {
    if (err) {
        console.log('Cannot connect to database.');
    } else {
        console.log('Connection established.');
    }
});

app.get('/booktitles', (req, res) => {
    conn.query(`SELECT book_name FROM book_mast`, (err, result) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.status(200).json(result);
        }
    });
});

app.get('/bookstore', (req, res) => {
    let allInfo = `SELECT * FROM book_mast
    JOIN author ON author.aut_id = book_mast.aut_id
    JOIN category ON category.cate_id = book_mast.cate_id
    JOIN publisher ON publisher.pub_id = book_mast.pub_id`
    let category = req.query.category;
    let publisher = req.query.publisher;
    let plt = req.query.plt;
    let pgt = req.query.pgt;
    let isFirstQuery = true;
    let queryValues = [];
    
    if (category|| publisher || plt || pgt) {
    } if (category) {
        isFirstQuery === true;
        queryValues.push(category);
        allInfo = `${allInfo} WHERE category.cate_descrip = ?`;
    } else {
        isFirstQuery = false;
    } if (publisher) {
        queryValues.push(publisher);
        if (isFirstQuery === true) {
        allInfo = `${allInfo} WHERE publisher.pub_name = ?`;
        } else {
        allInfo = `${allInfo} AND publisher.pub_name = ?`;
    }
    }  if (plt) {
        queryValues.push(plt);
        if (isFirstQuery === true) {
        allInfo = `${allInfo} WHERE book_price < ?`;
        } else {
        allInfo = `${allInfo} AND book_price < ?`;
    }
    }  if (pgt) {
        queryValues.push(pgt);
        if (isFirstQuery === true) {
        allInfo = `${allInfo} WHERE book_price > ?`;
        } else {
        allInfo = `${allInfo} AND book_price > ?`;
    }
    };

    conn.query(allInfo, queryValues, (err, rows) => {
        if (err) {
            console.log(err);
            res.send(500);
        } else {
            res.status(200).json(rows);
        }
    });
});

app.listen(PORT);
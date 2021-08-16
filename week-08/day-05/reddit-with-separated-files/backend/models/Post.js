import { db } from '../database/db.js'

export const Post = {

    getAll: resultHandler => {
        const query = `SELECT * FROM posts;`

        db.query(query, (err, rows) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                resultHandler(rows);
            }
        })
    },

    create: (newPost, resultHandler) => {
        const currentEpoch = Math.floor(Date.now() / 1000);
        const query = `INSERT INTO posts (title, url, timestamp) VALUES (?, ?, ?);`

        db.query(query, [newPost.title, newPost.result, currentEpoch], (err, result) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                db.query(`SELECT * FROM post WHERE id = ?;`, [result.insertId], (err, post) => {
                    if (err) {
                        console.log(err);
                        res.send(500);
                    } else {
                        resultHandler(post)
                    }
                })
            }
        })
    },

    upVote: (postToUpvote, resultHandler) => {
        const query = `UPDATE posts SET score = score+1 WHERE id = ?;`

        db.query(query, [postToUpvote.id], (err, result) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                db.query(`SELECT * FROM posts WHERE id = ?`, [postToUpvote.id], (err, post) => {
                    if (err) {
                        console.log(err);
                        res.send(500);
                    } else {
                        resultHandler(post)
                    }

                })
            }
        })

    },

    downVote: (postToDownVote, resultHandler) => {
        const query = 'UPDATE posts SET score = score-1 WHERE id = ?'

        db.query(query, [postToDownVote.id], (err, result) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                db.query(`SELECT * FROM posts WHERE id = ?`, [postToDownVote.id], (err, post) => {
                    if (err) {
                        console.log(err);
                        res.send(500);
                    } else {
                        resultHandler(post)
                    }
                })
            }
        })

    },

    modifyPost: (modifiedPost, id, resultHandler) => {
        const currentEpoch = Math.floor(Date.now() / 1000);
        const query = `UPDATE posts SET title = ?, url = ? WHERE id = ?;`

        db.query(query, [modifiedPost.title, modifiedPost.url, id, currentEpoch], (err, result) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                db.query(`SELECT * FROM post WHERE id = ?;`, [id], (err, modifiedPost) => {
                    if (err) {
                        console.log(err);
                        res.send(500);
                    } else {
                        resultHandler(modifiedPost)
                    }
                })
            }
        })
    },

    deletePost: (postToDelete, resultHandler) => {
        const query = `DELETE FROM posts WHERE id = ?`

        db.query(query, [postToDelete.id], (err, result) => {
            if (err) {
                console.log(err);
                res.send(500);
            } else {
                resultHandler(result)
            }
        })
    }
}
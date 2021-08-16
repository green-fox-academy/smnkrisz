import { createErrorResponse } from '../services/errorService.js'
import { Post } from '../models/Post.js'

export const postController = {

    getAllPosts: (req, res) => {
        const resultHandler = (dbResults) => {
            res.status(200).json({ posts: dbResults })
        }
        Post.getAll(resultHandler)
    },

    createPost: (req, res) => {
        const resultHandler = (dbResults) => {
            res.status(200).json(dbResults)
        }
        Post.create(req.body, resultHandler)
    },

    upVotePost: (req, res) => {
        const resultHandler = (dbResults) => {
            res.status(200).json(dbResults)
        }
        Post.upVote(req.params, resultHandler)
    },

    downVotePost: (req, res) => {
        const resultHandler = (dbResults) => {
            res.status(200).json(dbResults)
        }
        Post.downVote(req.params, resultHandler)
    },

    modifyPostById: (req, res) => {
        const resultHandler = (dbResults) => {
            res.status(200).json(dbResults)
        }
        Post.modifyPost(req.body, req.params.id, resultHandler)

    },

    deletePostById: (req, res) => {
        const resultHandler = (dbResults) => {
            res.status(200).json(dbResults)
        }
        Post.deletePost(req.params, resultHandler)
    }
}
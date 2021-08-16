import express from 'express'
import { postController } from './controller/postController.js'

export const router = express.Router()

router.get('/posts', postController.getAllPosts)
router.post('/posts', postController.createPost)
router.put('/posts/:id/upvote', postController.upVotePost)
router.put('/posts/:id/downvote', postController.downVotePost)
router.put('/posts/:id', postController.modifyPostById)
router.delete('/posts/:id', postController.deletePostById)
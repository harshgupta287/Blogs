import express from 'express'
import { doLike, likeCount } from '../controllers/BlogLike.controller.js'
import { authenticate } from '../middleware/authenticate.js'

const BlogLikeRoute = express.Router()

// BlogLikeRoute.post('/do-like', authenticate, doLike)
// BlogLikeRoute.get('/get-like/:blogid/:userid?', likeCount)


BlogLikeRoute.post('/do-like', authenticate, doLike)
BlogLikeRoute.get('/get-like/:blogid/', authenticate, likeCount)

export default BlogLikeRoute
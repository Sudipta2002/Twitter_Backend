import express from 'express';
import { createTweet } from '../../controllers/tweet-controller.js';
import { toogleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
const v1Routes = express.Router();

v1Routes.post('/tweets', createTweet);
v1Routes.post('/likes/toggle', toogleLike);
v1Routes.post('/comments', createComment)
export { v1Routes };
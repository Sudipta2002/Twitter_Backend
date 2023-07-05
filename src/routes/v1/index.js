import express from 'express';
import { createTweet } from '../../controllers/tweet-controller.js';
const v1Routes = express.Router();
v1Routes.post('/tweets', createTweet);

export { v1Routes };
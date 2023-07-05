import express from 'express';
import { connectDB } from './config/db.js';
// const connectDB = require('./config/db');
const app = express();
import { TweetRepository } from './repository/index.js';
import { TweetService } from './services/tweet-service.js';
import { HashtagRepository } from './repository/index.js';
import { Comment } from './models/comment.js';
import { Tweet } from './models/tweet.js';
app.listen(3000, async() => {
    console.log('listening on port 3000');
    await connectDB();
    console.log("Mongo db connected")
        // const tweet = await Tweet.create({
        //     content: 'Second tweet',
        //     userEmail: 'A@f' 
        // })
        // const tweets = await Tweet.findById('63e35ccd9df8f13183389b48');
        // tweets.userEmail = 'A@b@gmail.com';
        // await tweets.save();
        // console.log(tweets);
        // const tweet = await repo.get('63e35ccd9df8f13183389b48');
        // console.log(tweet);
        // const tweet = await repo.update('63e35ccd9df8f13183389b48', { content: 'New  latest content' });
        // tweet.comments.push({
        //     content: 'First nested comment'
        // });
        // await tweet.save();
        // console.log(tweet); 
        // const tweet = await repo.create({ content: 'with comment schema ' });
        // const comment = await Comment.create({ content: 'new  comment' });
        // tweet.comments.push(comment);
        // await tweet.save();
        // console.log(tweet);
        // const tweet = await repo.getTweetWithComment('63e36ee4d0946d48a2089139');
        // const tweet = await repo.getAll(1, 4);
        // console.log(tweet);
        // const tweets = await Tweet.find({
        //     content: ["First tweet", "my tweet", "sefwe"]
        // });
        // console.log(tweets);


    // let repo = new HashtagRepository();
    // let response = await repo.findByName(['Trend', 'Career']);
    // console.log(response);
    // response = response.map(tags => tags.title);
    // console.log(response);


    // let service = new TweetService();
    // const tweet = await service.create({ content: 'This is after #processing . #fun Really #Trend #Career' });
    // console.log(tweet);
});
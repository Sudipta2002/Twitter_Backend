const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        max: [250, 'Tweet Can not be more than 250 characters'],
        required: true
    },
    hashtags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hashtag'
    }],
    // userEmail: {
    //     type: String
    // },
    // comments: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Comment'
    // }]
}, { timestamps: true });
const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
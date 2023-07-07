import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        max: [250, 'Tweet Can not be more than 250 characters'],
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    // userEmail: {
    //     type: String
    // },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }],
    images: [{
        type: String
    }]
}, { timestamps: true });
const Tweet = mongoose.model('Tweet', tweetSchema);
export { Tweet };
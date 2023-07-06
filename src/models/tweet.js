import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        max: [250, 'Tweet Can not be more than 250 characters'],
        required: true
    },
    // hashtags: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Hashtag'
    // }],
    // userEmail: {
    //     type: String
    // },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }]
}, { timestamps: true });
const Tweet = mongoose.model('Tweet', tweetSchema);
export { Tweet };
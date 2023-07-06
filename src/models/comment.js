import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    onModel: {
        type: String,
        required: true,
        enum: ["Tweet", "Comment"]
    },
    content: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel' // dynamic reference via refPath
    },
    comments: [{
        // content: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
            // }
    }],
    // likes: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Like"
    // }]
}, { timestamps: true })
const Comment = mongoose.model('Comment', commentSchema);
export { Comment };
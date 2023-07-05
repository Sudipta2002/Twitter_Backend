import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    },
    comments: [{
        content: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true })
const Comment = mongoose.model('Comment', commentSchema);
export { Comment };
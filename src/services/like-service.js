import { LikeRepository } from "../repository/like-repository.js";
import { TweetRepository } from "../repository/tweet-repository.js";
class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }
    async toggleLike(modelId, modelType, userId) { // api/v1/like/toggle?id=modelId&type=Tweet or Comment
        if (modelType == "Tweet") {
            // function scope
            var likeable = await this.tweetRepository.find(modelId);

        } else if (modelType == "Comment") {
            // to-do
            // var likeable = await this.commentRepository.get(modelId).populate('likes');
        } else {
            throw new Error("Unknown model type");
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        if (exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();
            var isRemoved = true;
        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            console.log("newLike" + newLike);
            likeable.likes.push(newLike);
            await likeable.save();
            var isRemoved = false;
        }
        return isRemoved;
    }
}
export { LikeService };
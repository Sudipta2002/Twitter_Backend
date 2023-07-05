import { TweetRepository, HashtagRepository } from '../repository/index.js';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    async create(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extract hashtags
        tags = tags.map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        // todo create hashtags and add here
        /**
         * 1. bulk create in mongoose
         * 2. filter hashtags based on multiple tags
         * 3. how to add tweet id for all the hashtags
         */
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titlePresentTags = alreadyPresentTags.map((tag) => tag.title);
        let newTags = tags.filter(tag => !titlePresentTags.includes(tag));
        // console.log(newTags);
        newTags = newTags.map(tag => {
            return {
                title: tag,
                tweets: [tweet.id]
            }
        });
        const response = await this.hashtagRepository.bulkCreate(newTags);
        // console.log(response);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        });
        return tweet;
    }
}

export { TweetService };

/*
    this is my #first #tweet. I am really #excited  
*/
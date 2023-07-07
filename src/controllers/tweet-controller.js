import { TweetService } from "../services/tweet-service.js";
import { upload } from '../config/s3-config.js';
const singleUploader = upload.single('image');
const tweetService = new TweetService();

export const createTweet = async(req, res) => {
    try {
        // singleUploader(req, res, function(err, data) {
        //         if (err) {
        //             return res.status(500).json({ error: err });
        //         }
        //         console.log("Image url is ", req.file);
        //         return res.status(200).json({ msg: "ok" });
        //     })
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Successfully Created Tweet",
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error
        });
    }
}
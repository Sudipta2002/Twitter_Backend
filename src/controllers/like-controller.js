import { LikeService } from "../services/like-service.js";

const likeService = new LikeService();

export const toogleLike = async(req, res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(200).json({
            success: true,
            message: "Successfully toggled Liked ",
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
import { Hashtag } from '../models/hashtag.js';
class HashtagRepository {

    async create(data) {
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async bulkCreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
    async findByName(titleList) {
        try {
            const tag = await Hashtag.find({
                title: titleList
            });
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async get(id) {
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
            try {
                const response = await Hashtag.findByIdAndRemove(id);
                return response;
            } catch (error) {
                console.log(error);
            }
        }
        // skip and offset can be helpful using mongoose
        // async getAll(offset, limit) {
        //     try {
        //         const tag = await Hashtag.find().skip(offset).limit(limit);
        //         return tag;
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
}
export { HashtagRepository };
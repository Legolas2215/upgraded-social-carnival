import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    creator: String,
    message: String,
    tags: [String],
    selectedFile: String,
    Likes: {
        type:[String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
})

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;
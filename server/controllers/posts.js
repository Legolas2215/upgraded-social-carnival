import mongoose from "mongoose";
import postMessage from "../models/postMessage.js";
export const getPosts = async (req, res) => {
    try {
        const posts = await postMessage.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new postMessage(post);
    try {
        await newPost.save();
        console.log(req.body)
        res.status(201).json(post);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

};

export const updatePosts = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;


    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post found');

        const updatedPost = await postMessage.findByIdAndUpdate(_id, post, { new: true });
        res.json(updatedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

};

export const deletePosts = async (req,res) =>{
    const { id } = req.params;

    try {
        
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post found');
        await postMessage.findByIdAndRemove(id);
        res.json({message:'Delete Successful'});

    }
    catch (error) {
        res.status(404).json({message: error});
    }
}

export const likePost = async(req,res) =>{
    const { id } = req.params;

    if(!req.userId) return res.json({message: 'Unauthorized'})

    const post = await postMessage.findById(id);

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post found');
        // console.log(post);

        const index = post.Likes.findIndex((id) => id === String(req.userId));

        if(index === -1){
            post.Likes.push(req.userId);
        }
        else{
            post.Likes = post.Likes.filter((id) => id !== String(req.userId));
        }

        const likedPost = await postMessage.findByIdAndUpdate(id,post,{new:true});
        res.json(likedPost);


    }
    catch (error) {
        res.status(404).json({message: error});
    }

}
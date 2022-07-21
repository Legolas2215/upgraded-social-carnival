import express  from "express";
import {getPosts,createPosts, updatePosts,deletePosts,likePost} from "../controllers/posts.js"
import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/',getPosts);
router.post('/',createPosts);
router.patch('/:id',auth,updatePosts);
router.delete('/:id',auth,deletePosts);
router.patch('/:id/likePost',auth,likePost);
export default router;
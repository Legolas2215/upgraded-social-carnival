import {CREATE,UPDATE,FETCH_ALL,DELETE,LIKE} from '../constants/actionTypes.js'
import * as api from '../api';

export const getPosts= () => async (dispatch)=>{
    try {
        const {data} = await api.fetchPosts();
        const action = {type:FETCH_ALL,payload:data};
        dispatch(action);

    } 
    catch (error) {
       console.log(error.message); 
    }
}


export const createPost= (post) => async (dispatch)=>{
    try {
        const {data} = await api.createPost(post);
        const action = {type:CREATE,payload:data};
        dispatch(action);

    } 
    catch (error) {
       console.log(error.message); 
    }
}

export const updatePost= (id,post) => async (dispatch)=>{
    try {
        const {data} = await api.updatePost(id,post);
        const action = {type:UPDATE,payload:data};
        dispatch(action);

    } 
    catch (error) {
       console.log(error); 
    }
}

export const deletePost= (id) => async (dispatch)=>{
    try {
        await api.deletePost(id);
        const action = {type:DELETE,payload:id};
        dispatch(action);

    } 
    catch (error) {
       console.log(error); 
    }
}

export const likePost= (id) => async (dispatch)=>{
    try {
        const {data} = await api.likePost(id);
        const action = {type:LIKE,payload:data};
        dispatch(action);

    } 
    catch (error) {
       console.log(error); 
    }
}
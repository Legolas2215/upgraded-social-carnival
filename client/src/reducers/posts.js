import {CREATE,UPDATE,FETCH_ALL,DELETE,LIKE} from '../constants/actionTypes.js'

const reducer = (posts =[],action) =>{
    switch (action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case FETCH_ALL:
            return action.payload;
        case UPDATE:
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case CREATE:
            posts = action.payload;
            return action.payload;
    
        default:
            return posts;
    }
}

export default reducer;
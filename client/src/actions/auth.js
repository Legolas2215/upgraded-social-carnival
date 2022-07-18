import {AUTH,LOGOUT} from '../constants/actionTypes.js'

export const googleLogin= (result,token) => async (dispatch)=>{
    const action = {type: AUTH , data: {result,token}}
    dispatch(action);
}

export const logout= () => async (dispatch)=> {

    const action = {type: LOGOUT };
    dispatch(action);
}
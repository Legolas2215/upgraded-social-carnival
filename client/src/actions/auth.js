import {AUTH,LOGOUT} from '../constants/actionTypes.js'
import * as api from '../api/index.js';

export const googleLogin= (result,token) => async (dispatch)=>{
    const action = {type: AUTH , data: {result,token}}
    dispatch(action);
}

export const logout= () => async (dispatch)=> {

    const action = {type: LOGOUT };
    dispatch(action);
}

export const login= (loginDetails) => async (dispatch)=>{
    const {data} = await api.signin(loginDetails);
    const action = {type: AUTH , data}
    dispatch(action);
};

export const signup= (signupDetails) => async (dispatch)=>{
    const {data} = await api.signup(signupDetails);
    const action = {type: AUTH , data}
    dispatch(action);
};

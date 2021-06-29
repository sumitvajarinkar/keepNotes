import {LOG_OUT, SIGN_IN, UPDATE_USER} from './types';
import axios from 'axios';
export const loginWithGoogle=(res)=>async dispatch=>{
    const {data}=await axios.post('/googlelogin',{tokenId:res.tokenId})
    console.log('Google login success',data)
    localStorage.setItem('profile',JSON.stringify({...data}))
    dispatch({type:SIGN_IN,payload:data})
    dispatch(updateUser());
}

export const updateUser=()=>{
  return{type:UPDATE_USER,payload:JSON.parse(localStorage.getItem('profile'))}
}

export const logout=()=>{
  localStorage.clear();
  return{type:LOG_OUT,payload:{}}
}
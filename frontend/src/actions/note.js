import { note } from "../api"
import {ADD_NOTE, ADD_NOTE_ERROR, DELETE_NOTE, DELETE_NOTE_ERROR, DELETE_NOTE_REQ, GET_NOTES, GET_NOTES_ERROR} from './types'
export const addNote=(title,text,color)=>async(dispatch,getState)=>{
    const user = getState().user.user.user
    // console.log(text,title,color,user)
    try {
        const {data}= await note.post('/api/notes',{title,text,color,_id:user._id})
        console.log(data)
     dispatch({type:ADD_NOTE,payload:data})
    } catch (error) {
        dispatch({type:ADD_NOTE_ERROR,payload:error.response&&error.response.data.message?error.response.data.message:error.message})
    }
}

export const getNote=()=>async(dispatch,getState)=>{
    try {
    const user = getState().user.user.user

        const {data}=await note.get(`/api/notes?userId=${user._id}`)
        dispatch({type:GET_NOTES,payload:data})
    } catch (error) {
        dispatch({type:GET_NOTES_ERROR,payload:error.response&&error.response.data.message?error.response.data.message:error.message})
        
    }
}

export const deleteNote=id=>dispatch=>{
    dispatch({type:DELETE_NOTE_REQ})
    try {
        const {data}=note.delete(`/api/notes/${id}`)
        dispatch({type:DELETE_NOTE,payload:id})
        // console.log(data)
    } catch (error) {
        dispatch({type:DELETE_NOTE_ERROR,payload:error.response&&error.response.data.message?error.response.data.message:error.message})
    }
}
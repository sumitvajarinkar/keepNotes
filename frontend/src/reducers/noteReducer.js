import { ADD_NOTE, ADD_NOTE_ERROR, ADD_NOTE_REQ, DELETE_NOTE, DELETE_NOTE_ERROR, DELETE_NOTE_REQ, GET_NOTES, GET_NOTES_ERROR } from "../actions/types";

export const noteReducer =(state={loading:false,noteItems:[]},action)=>{
switch (action.type) {
    case ADD_NOTE_REQ:
        return {...state,loading:true}
    case ADD_NOTE:
        return {...state,loading:false,noteItems:[...state.noteItems,action.payload]}
    case GET_NOTES:
        return {...state,loading:false,noteItems:[...action.payload]}
    case ADD_NOTE_ERROR:
        return {...state,loading:false,error:action.payload}
    case GET_NOTES_ERROR:
        return {...state,loading:false,error:action.payload}
    case DELETE_NOTE_REQ:
        return{...state,loading:true}
    case DELETE_NOTE:
        const id = action.payload
        return {...state,loading:false,noteItems:state.noteItems.filter(x=>x._id!==id)}
    case DELETE_NOTE_ERROR:
        return {...state,loading:false,error:action.payload}
    default:
        return state
}
}
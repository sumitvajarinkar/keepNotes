import { LOG_OUT, SIGN_IN, UPDATE_USER } from "../actions/types";

const authReducer=(state={user:{}},action)=>{
    switch(action.type){
        case SIGN_IN:
            return{...state,user:action.payload}
        case LOG_OUT:
            return {...state,user:action.payload};
        case UPDATE_USER:
            return{...state,user:action.payload}    
        default:
            return state;    
    }
}
export default authReducer;
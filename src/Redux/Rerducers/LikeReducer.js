import { LIKE_DELIKE_BLOG_FAILURE, LIKE_DELIKE_BLOG_REQUEST, LIKE_DELIKE_BLOG_SUCCESS } from "../types/LikeType";


const initialState={
    likeData:[]
}

export const  LikeReducer=(state= initialState , action) =>{
    switch (action.type ) {
        case LIKE_DELIKE_BLOG_REQUEST :
            return {
                ...state,
                loading: true
            }
        case LIKE_DELIKE_BLOG_SUCCESS :
         
            console.log(action.payload);
            // let value = state.likeData
            // value.push(action.payload)
            return {
                ...state,
                loading:false,
                likeData:action.payload,
                error:""
            }
        case LIKE_DELIKE_BLOG_FAILURE :
           
            return {
                ...state,
                loading:false,
                user:[],
                error:action.payload
            
            }
        default: return state
        
    }
}
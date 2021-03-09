import {BLOG_DATA_FAILURE, BLOG_DATA_REQUEST, BLOG_DATA_SUCCESS,} from "../types/BlogDataType"
import { toast } from 'react-toastify';
const initialState={
    blogData:[]
}

export const  BlogDataReducer=(state= initialState , action) =>{
    switch (action.type ) {
        case BLOG_DATA_REQUEST :
            return {
                ...state,
                loading: true
            }
        case BLOG_DATA_SUCCESS :
            toast.success("data find Successfully")
            // console.log(action.payload);
            return {
                ...state,
                loading:false,
                blogData:action.payload,
                error:""
            }
        case BLOG_DATA_FAILURE :
            toast.error("no data found")
            return {
                ...state,
                loading:false,
                blogData:[],
                error:action.payload
            
            }
        default: return state
            break;
    }
}
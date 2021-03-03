
// import { NEW_BLOG_FAILURE, NEW_BLOG_REQUEST, NEW_BLOG_SUCCESS } from '../types/CreateBlogsType'
// import { toast } from 'react-toastify';


// const initialState={
//     newBlogData:[]
// }

// export const  CreateBlogsReducer=(state= initialState , action) =>{
//     switch (action.type ) {
//         case NEW_BLOG_REQUEST :
//             return {
//                 ...state,
//                 loading: true
//             }
//         case NEW_BLOG_SUCCESS :
//             toast.success("data find Successfully")
//             return {
//                 ...state,
//                 loading:false,
//                 user:action.payload,
//                 error:""
//             }
//         case NEW_BLOG_FAILURE :
//             toast.error("no data found")
//             return {
//                 ...state,
//                 loading:false,
//                 user:[],
//                 error:action.payload
            
//             }
//         default: return state
//     }
// }
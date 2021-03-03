import { combineReducers } from "redux";
import { loginReducer } from "./Rerducers/LoginReducer";
import { RegisterReducer } from "./Rerducers/RegisterReducer";
import { ContactReducer } from "./Rerducers/ContactReducer";
import { BlogDataReducer } from "./Rerducers/BlogDataReducer";
import { CreateBlogsReducer } from "./Rerducers/CreateBlogsReducer";
import { CommentReducer } from "./Rerducers/CommentReducer";
import { LikeReducer } from "./Rerducers/LikeReducer";



const rootReducer = combineReducers({
    loginReducer,
    RegisterReducer,
    ContactReducer,
    BlogDataReducer,
    // CreateBlogsReducer,
    CommentReducer,
    LikeReducer
})

    
export default rootReducer

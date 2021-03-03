import { USER_COMMENT_FAILUER, USER_COMMENT_REQUEST, USER_COMMENT_SUCCESS } from '../types/CommentType';

const initialState = {
    commentData: []

}

export const CommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_COMMENT_REQUEST:
            return {
                // ...state,
                loading: true
            }

        case USER_COMMENT_SUCCESS:
            console.log("success called");
           
            return {
                // ...state,
                loading: false,
                user: action.payload,
                error: ""
            }

        case USER_COMMENT_FAILUER:
            return {
                // ...state,
                loading: false,
                user: [],
                error: action.payload
            }
        default:
            return state
    }
}
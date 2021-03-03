import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../types/LoginType";
import { toast } from 'react-toastify';

const initialState = {  
    loginData: []

}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
                return {
                
                    ...state,
                    loading: true
                }

        case FETCH_USERS_SUCCESS:
            toast.success("Login Success")
            console.log("success called");
           
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ""
            }

        case FETCH_USERS_FAILURE:
            toast.error("invalid username or password ")
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload

            }
        // case ADD_USER:
        //     const user = action.payload
        //     const Data = state.loginData
        //     Data.push(user)
        //     return {
        //         loginData: Data
        //     }
        default:
            return state
    }
}
import { REGISTER_USERS_FAILURE, REGISTER_USERS_REQUEST, REGISTER_USERS_SUCCESS } from '../types/RegisterType'
import { toast } from 'react-toastify'
const initialState = {
    RegisterData: []

}

export const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USERS_REQUEST:
            return {
                // ...state,
                loading: true
            }

        case REGISTER_USERS_SUCCESS:
            console.log("success called");
            toast.success("Login Success")
            return {
                // ...state,
                loading: false,
                user: action.payload,
                error: ""
            }

        case REGISTER_USERS_FAILURE:
            toast.error("userName already exist")
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
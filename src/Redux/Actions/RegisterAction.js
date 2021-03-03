import  axios  from 'axios'
import { REGISTER_USERS_FAILURE, REGISTER_USERS_REQUEST, REGISTER_USERS_SUCCESS } from '../types/RegisterType'


export const registerUsersRequest = () => {
    return {
        type: REGISTER_USERS_REQUEST
    }
}

export const registerUsersSuccess = (user) => {
    return {
        type: REGISTER_USERS_SUCCESS,
        payload :user
    }
}

export const registerUsersFailure = (error) => {
    return {
        type: REGISTER_USERS_FAILURE,
        payload: error
    }
}

export function registerUser(userData) {
    return dispatch => {
        dispatch(registerUsersRequest())
         console.log(userData);
        axios.post('http://localhost:3003/userData',userData)
            .then(res => {
                var newUser = res.data
                // var user1 = user.find(values => values.name === data1.name && values.password === data1.password)
                // if (user1 === undefined) {
                //     throw (res.error)
                // }
                // localStorage.setItem('login', JSON.stringify(true))
                // localStorage.setItem('user', JSON.stringify(user1))
                // localStorage.setItem('token', (user1.id))
                dispatch(registerUsersSuccess(newUser))
                return res.data;
            }).catch(error => {
                dispatch(registerUsersFailure("UserName or Password "));
            })
    }
}

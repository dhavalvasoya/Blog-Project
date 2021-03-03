import  axios  from 'axios'
import { CONTACT_USERS_FAILURE, CONTACT_USERS_REQUEST, CONTACT_USERS_SUCCESS } from '../types/ContactType'


export const contactUsersRequest = () => {
    return {
        type: CONTACT_USERS_REQUEST
    }
}

export const contactUsersSuccess = (user) => {
    return {
        type: CONTACT_USERS_SUCCESS,
        payload :user
    }
}

export const contactUsersFailure = (error) => {
    return {
        type: CONTACT_USERS_FAILURE,
        payload: error
    }
}

export function contactUser(contact) {
    return dispatch => {
        dispatch(contactUsersRequest())
         console.log(contact);
        axios.post('http://localhost:3003/Contact',contact)
            .then(res => {
                var cUser = res.data
                // var user1 = user.find(values => values.name === data1.name && values.password === data1.password)
                // if (user1 === undefined) {
                //     throw (res.error)
                // }
                // localStorage.setItem('login', JSON.stringify(true))
                // localStorage.setItem('user', JSON.stringify(user1))
                // localStorage.setItem('token', (user1.id))
                dispatch(contactUsersSuccess(cUser))
                return res.data;
            }).catch(error => {
                dispatch(contactUsersFailure("UserName or Password "));
            })
    }
}

import  axios  from 'axios'
import { USER_COMMENT_FAILUER, USER_COMMENT_REQUEST, USER_COMMENT_SUCCESS } from '../types/CommentType'


export const userCommentRequest = () => {
    return {
        type: USER_COMMENT_REQUEST
    }
}

export const userCommentSuccess = (user) => {
    return {
        type: USER_COMMENT_SUCCESS,
        payload :user
    }
}

export const userCommentFailuer = (error) => {
    return {
        type: USER_COMMENT_FAILUER,
        payload: error
    }
}

export function userComment(contact) {
    return dispatch => {
        dispatch(userCommentRequest())
         console.log(contact);
        axios.post('http://localhost:3003/comments',contact)
            .then(res => {
                var cUser = res.data
                // var user1 = user.find(values => values.name === data1.name && values.password === data1.password)
                // if (user1 === undefined) {
                //     throw (res.error)
                // }
                // localStorage.setItem('login', JSON.stringify(true))
                // localStorage.setItem('user', JSON.stringify(user1))
                // localStorage.setItem('token', (user1.id))
                dispatch(userCommentSuccess(cUser))
                return res.data;
            }).catch(error => {
                dispatch(userCommentFailuer(" comment not success   "));
            })
    }
}

import {BLOG_DATA_FAILURE, BLOG_DATA_REQUEST, BLOG_DATA_SUCCESS,} from "../types/BlogDataType"
import  axios  from 'axios'


export const blogDataRequset =()=> {
    return{
        type: BLOG_DATA_REQUEST
    }
}
export const blogDataSuccess =user=> {
    return{
        type: BLOG_DATA_SUCCESS,
        payload:user
    }
}
export const blogDatafailure =error=> {
    return{
        type: BLOG_DATA_FAILURE,
        payload:error
    }
}

export function blogDataApi() {
    return dispatch => {
        console.log('api')
        dispatch(blogDataRequset())
        axios.get('http://localhost:3003/blogData')
            .then(res => {
                var user = res.data
                let token = localStorage.getItem("token")
               
                // console.log(user);
                // console.log(data);
                var user1 = user.filter(values => values.user_id===token)
               
                
                console.log(user);
                if (user === undefined) {
                    throw (res.error)
                }
             
                dispatch(blogDataSuccess(user1))
                return res.data;
            }).catch(error => {
                dispatch(blogDatafailure("error "));
            })
    }
}
export function newBlogApi(contact) {
    return dispatch => {
        dispatch(blogDataRequset())
        console.log(contact);
        axios.post('http://localhost:3003/blogData', contact)
            .then(res => {
                let cUser = res.data
                // dispatch(blogDataSuccess(cUser))
                dispatch(blogDataApi())
                // localStorage.setItem('blogToken', (cUser.id))
                return res.data;
            }).catch(error => {
                dispatch(blogDatafailure(error));
            })
    }
}
export function deleteBlog(data) {
    return dispatch => {
        dispatch(blogDataRequset())
        console.log(data);
        axios.delete(`http://localhost:3003/blogData/${data}`)
            .then(res => {
                var user = res.data
                console.log(user, "user");
                //     var user1 = user.filter(values => values.id !== data.id)
                //     console.log(user1);
                // dispatch(blogDataSuccess(user))
                dispatch(blogDataApi())
            }).catch(error => {
                dispatch(blogDatafailure("blog not deleted"));
            })
    }
}

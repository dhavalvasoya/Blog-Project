// import axios from 'axios'
// import { NEW_BLOG_FAILURE, NEW_BLOG_REQUEST, NEW_BLOG_SUCCESS } from '../types/CreateBlogsType'


// export const newBlogRequest = () => {
//     return {
//         type: NEW_BLOG_REQUEST
//     }
// }

// export const newBlogSuccess = (user) => {
//     return {
//         type: NEW_BLOG_SUCCESS,
//         payload: user
//     }
// }

// export const newBlogFailure = (error) => {
//     return {
//         type: NEW_BLOG_FAILURE,
//         payload: error
//     }
// }

// export function newBlogApi(contact) {
//     return dispatch => {
//         dispatch(newBlogRequest())
//         console.log(contact);
//         axios.post('http://localhost:3003/blogData', contact)
//             .then(res => {
//                 var cUser = res.data
//                 dispatch(newBlogSuccess(cUser))
//                 localStorage.setItem('blogToken', (cUser.id))
//                 return res.data;
//             }).catch(error => {
//                 dispatch(newBlogFailure("error"));
//             })
//     }
// }
// export function deleteBlog(data) {
//     return dispatch => {
//         dispatch(newBlogRequest())
//         console.log(data.id);
//         axios.delete(`http://localhost:3003/blogData/${data.id}`)
//             .then(res => {
//                 var user = res.data
//                 console.log(user, "user");
//                 //     var user1 = user.filter(values => values.id !== data.id)
//                 //     console.log(user1);
//                 dispatch(newBlogSuccess(user))
//             }).catch(error => {
//                 dispatch(newBlogFailure("blog not deleted"));
//             })
//     }
// }

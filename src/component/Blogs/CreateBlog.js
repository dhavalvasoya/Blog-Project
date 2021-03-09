import React, { useEffect, useState } from 'react'
import { Modal, Button, Select, } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { newBlogApi } from '../../Redux/Actions/BlogDataAction';
// import { UploadOutlined } from '@ant-design/icons';
// import Form from 'antd/lib/form/Form';


function CreateBlog() {


    const [visible, setVisible] = useState(false);
    const [blog, setBlog] = useState({});
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user");
    const data = JSON.parse(user)
    console.log(token, "id");
    const state = useSelector(state => state.newBlogData)
    const dispatch = useDispatch()
    // const [form] = Form.useForm();

    useEffect(() => {

    }, [])
    const { Option } = Select;
    const showModal = () => {
        setVisible(true);
    };
    const layout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 17,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    const onFinish = (values) => {
        console.log(values);
    };

    const handleOk = (values) => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);

        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
            onFinish(values)
            dispatch(newBlogApi(blog))
            setBlog({ ...blog, blogImgSrc: '', blogTitle: '', desc: '', user_id: '' })

            onsubmit()

        }, 2000);
    };

    const onsubmit = () => {
        // e.preventDefault()
        console.log(blog);
        // window.location.reload()
        // setBlog({})

    }

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
    const handleChange = (e) => {
        let reader = new FileReader(e.target.files[0]);
        reader.onloadend = () => {
            setBlog({ ...blog, blogImgSrc: reader.result });

            console.log(reader);
        };
        reader.readAsDataURL(e.target.files[0]);

    }

    const handleInput = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value, user_id: token, created_by: data.name })
        // setBlog({...blog,user_id:token})
    }
    // console.log(blog);


    return (
        <>
            <Button type="primary" onClick={showModal}>
                Create Blog
      </Button>
            <Modal
                title="Create-Your-Blog"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >       <form onSubmit={handleOk}>
                    <input type="file"  onChange={handleChange}></input><br />
                    <label>Blog-Name :-</label>
                    <input style={{ width: "75%" }}  value={blog.blogTitle} type="text" name="blogTitle" onChange={handleInput}></input><br />
                    <label>Description :-</label>
                    <input style={{ width: "75%" }} value={blog.desc} type="text" name="desc" onChange={handleInput}></input>
                    {/* <button type="submit">submit</button>     */}
                </form>
            </Modal>
        </>
    )
}
export default CreateBlog
























// import React, { useEffect, useState } from 'react'
// import { Modal,  Button, Select, } from 'antd';
// import { useDispatch, useSelector } from 'react-redux';
// import { newBlogApi } from '../../Redux/Actions/BlogDataAction';
// // import { UploadOutlined } from '@ant-design/icons';
// // import Form from 'antd/lib/form/Form';


// function CreateBlog() {


//     const [visible, setVisible] = useState(false);
//     const [blog, setBlog] = useState({});
//     const [confirmLoading, setConfirmLoading] = useState(false);
//     const [modalText, setModalText] = useState('Content of the modal');
//     const token= localStorage.getItem("token")
//     const user = localStorage.getItem("user");
//     const data=JSON.parse(user)
//     console.log(token,"id");
//     const state = useSelector(state => state.newBlogData)
//     const dispatch = useDispatch()
//     // const [form] = Form.useForm();

//     useEffect(() => {


//     }, [])
//     const { Option } = Select;
//     const showModal = () => {
//         setVisible(true);
//     };
//     const layout = {
//         labelCol: {
//             span: 6,
//         },
//         wrapperCol: {
//             span: 17,
//         },
//     };
//     const tailLayout = {
//         wrapperCol: {
//             offset: 8,
//             span: 16,
//         },
//     };
//     const onFinish = (values) => {
//         console.log(values);
//     };

//     const handleOk = (values) => {
//         setModalText('The modal will be closed after two seconds');
//         setConfirmLoading(true);

//         setTimeout(() => { 
//             onsubmit()
//             setVisible(false);
//             setConfirmLoading(false);
//             onFinish(values)
//            dispatch( newBlogApi(blog))
//         }, 2000);
//     };

//     const onsubmit=()=>{
//     // e.preventDefault()
//         console.log(blog);
//     // setBlog({})

//     }

//     const handleCancel = () => {
//         console.log('Clicked cancel button');
//         setVisible(false);
//     };
//     const handleChange = (e) => {
//         let reader = new FileReader(e.target.files[0]);
//         reader.onloadend = () => {
//             setBlog({ ...blog, blogImgSrc: reader.result });

//             console.log(reader);
//         };
//         reader.readAsDataURL(e.target.files[0]);    

//     }

//     const handleInput=(e)=> {
//         setBlog({ ...blog, [e.target.name]: e.target.value ,user_id:token,created_by:data.name})
//         // setBlog({...blog,user_id:token})
//     }
//     // console.log(blog);


//     return (
//         <>
//             <Button type="primary" onClick={showModal}>
//             Create Blog
//       </Button>
//             <Modal
//                 title="Create-Your-Blog"
//                 visible={visible}
//                 onOk={handleOk}
//                 confirmLoading={confirmLoading}
//                 onCancel={handleCancel}
//             >       <form onSubmit={handleOk}>
//                     <input type="file" onChange={handleChange}></input><br/>
//                     <label>Blog-Name :-</label>
//                     <input style={{width:"75%"}} t type="text" name="blogTitle" onChange={handleInput}></input><br/>
//                     <label>Description :-</label>
//                     <input style={{width:"75%"}} type="text" name="desc" onChange={handleInput}></input> 
//                     {/* <button type="submit">submit</button>     */}
//                     </form>          
//             </Modal>
//         </>
//     )
// }   
// export default CreateBlog

import React, { useEffect, useState } from 'react'
import { Card, Button, Badge, Modal } from 'antd';
import { EditOutlined, DislikeOutlined, LikeOutlined, DownloadOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { blogDataApi } from '../../Redux/Actions/BlogDataAction';
import { ToastContainer } from 'react-toastify';
import { userComment } from '../../Redux/Actions/CommentAction';
import { deleteBlog } from '../../Redux/Actions/BlogDataAction'
import { fecthLike, likeBlogApi } from '../../Redux/Actions/LikeAction';

function DashBoardBlog() {
    const token = localStorage.getItem("token")
    const { Meta } = Card;
    const [visible, setVisible] = useState(false);
    const [comment, setComment] = useState({
        user_id: '',
        blog_id: '',
        comment: '',
    });
    const [likes, setLike] = useState({
        user_id: '',
        blog_id: '',
        status: ''
    });
    const dispatch = useDispatch()
    const dispatchBlog = useDispatch()
    const dispatchComment = useDispatch()
    const dispacthDeleteBlog = useDispatch()
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    // useEffect(() => {

    // }, [])

    useEffect(() => {
        dispatchBlog(blogDataApi())
        if (comment.comment === undefined) {
            dispatchComment(userComment(comment))
            setComment({ ...comment, blog_id: '', comment: '' })
        }
        // dispatch(fecthLike())    

        // displayDataAfterUpdate()
    }, [comment.comment])

    useEffect(() => {
        setTimeout(() => {
            
            dispatch(fecthLike())
        }, 500);
        if (likes.status === "like" || likes.status === "dislike") {
            // dispatch(fecthLike())

            dispatch(likeBlogApi(likes))

            setLike({ ...likes, blog_id: '', status: '' })
        }
    }, [likes.status])
    const blogState = useSelector(state => state.BlogDataReducer.blogData)
    const statusState = useSelector(state => state.LikeReducer.likeData)

    // console.log('list', blogState);
    console.log("likereducerdata++++++++ ", statusState, statusState.length);
  
    // const displayDataAfterUpdate=()=> {
    //     blogState
    // }


    // ==== comment part ===
    const showModal = (id) => {
        setVisible(true);
        console.log(id, "blog id");
        setComment({ ...comment, blog_id: id, user_id: token })

    };
    const handleOk = (values) => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
            onFinish(values)
            dispatchComment(userComment(comment))
        }, 2000);


    };
    const onFinish = (values) => {
        console.log(values);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
    const handleComment = (e) => {
        setComment({ ...comment, comment: e.target.value })
    }
    const removeBlog = (id) => {
        // e.preventDefault()
        dispacthDeleteBlog(deleteBlog(id))
        // window.location.reload()
    }
    const statusHandler = (id, Status) => {

        setLike({ ...likes, blog_id: id, status: Status, user_id: token })
    }

    // dispatch((likeBlogApi(likes)))


    console.log(likes, "likes");
    console.log("likereducerdata 2", statusState);



    // statusState ? statusState.filter(point => point.blog_id === data.id && point.status === "like").length : 0

    let abc = statusState;
    return (
        <> <div className="container">
            <div className="row">

                {blogState && blogState.map((data, index) => {
                    return (
                        <>
                            <div className="col-md-3 p-3" style={{ marginBottom: "15px", marginLeft: "50px" }} >
                                <Card
                                    style={{ width: "300px" }}
                                    key={data.id}

                                    cover={
                                        <img
                                            style={{ height: "300px" }}
                                            alt="example"
                                            src={data.blogImgSrc}
                                        />
                                    }
                                    actions={[
                                        <Badge count={statusState ? statusState.filter(point =>( point.blog_id === data.id && point.status === "like")).length : 0}>
                                            <Button type="primary" onClick={() => statusHandler(data.id, "like")} shape="round" icon={<LikeOutlined />} size={"middle"} /></Badge>,
                                        <Badge count={statusState ? statusState.filter(point => (point.blog_id === data.id && point.status === "dislike")).length : 0}>
                                            <Button type="primary" onClick={() => statusHandler(data.id, "dislike")} shape="round" icon={<DislikeOutlined />} size={"middle"} /></Badge>,
                                        <Button type="primary" onClick={() => showModal(data.id)} shape="round" icon={<EditOutlined />} size={"middle"} />,
                                        <Button type="primary" onClick={() => removeBlog(data.id)} shape="round" icon={<DeleteOutlined />} size={"middle"} />
                                    ]}
                                > <Meta key={index}
                                    title={data.blogTitle}
                                    description={data.desc}
                                    />
                                </Card>
                                {/* <p>{abc}</p> */}
                            </div>
                        </>
                    )
                })}
                <div>
                    <Modal
                        title="comments"
                        visible={visible}
                        onOk={handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                    >     <label>comment :- </label>
                        <input style={{ width: "80%" }} type="text" name="comment" value={comment.values} onChange={handleComment} ></input><br />
                    </Modal>
                </div>

            </div>
        </div>
        </>
    )
}

export default DashBoardBlog

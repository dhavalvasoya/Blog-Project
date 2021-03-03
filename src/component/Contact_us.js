import React from 'react'
import { Form, Input, InputNumber, Button, Col } from 'antd';
import Map from './Map';
import Navbar from '../layout/navbar';
import { contactUser } from '../Redux/Actions/ContactAction';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
function Contact_us() {
    const state = useSelector(state => state.ContactData)
    const dispatch = useDispatch()
    const layout = {
        labelCol: {
            span: 5,
        },
        wrapperCol: {
            span: 15,
        },
    };
    const notify = () => toast.success("Request is success!");
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <a value="87">+91</a>
        </Form.Item>
    );


    const onFinish = (values) => {
        console.log(values);
        dispatch(contactUser(values))
    }

    return (<>
        <Navbar />
        <div style={{ width: "50%" }}>
            <Col>
                <Form  {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name={['user', 'name']}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                    >
                        <Input
                            // addonBefore={prefixSelector}
                            style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item name={['user', 'introduction']} label="Introduction">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button onClick={notify} type="primary" htmlType="submit">
                            {/* <ToastContainer autoClose={1500} /> */}
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </div>
        <div style={{ marginLeft: "435px" }}>
            <h1>skdjfasdfa</h1>
        </div><div>
            <Map />
        </div>
    </>
    )
}
export default Contact_us
import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Redirect, useHistory } from "react-router-dom";
import Navbar from "../layout/navbar";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUsers } from "../Redux/Actions/LoginAction";

export default function Login() {
  const [form] = Form.useForm();
  let History = useHistory();
  
  // const notify = () => toast.success("login is success!");

  const [data, setData] = useState({
    name: "",
    password: "",
    status: false,
  });
  const state = useSelector(state => state.loginData)
  const dispatch = useDispatch()

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 9,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 9,
    },
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleRegister = () => {
    History.push("/register");
  };

  const submitFrom = (data) => {
    console.log(data);
    dispatch(loginUsers(data))

    setTimeout(() => {
      loginStatus()
    }, 1000);

   
  };
  const loginStatus = () => {
    let ticket = localStorage.getItem('login')
    console.log(ticket);
    if (ticket) {
      setData({
        ...data, status: true,
      })
      console.log( data.status)
    }

  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data);
  }
  const onReset = () => {
    form.resetFields();
  };

  if (data.status) {
   return <Redirect to="/dashboard" />
  }

  // privet routing 
  let st = true;
    const token = localStorage.getItem("token");
    console.log(token);
    if (token !== null) {
        console.log(st, "status");
        st = false;
    }

    if (st === false) {
        console.log(st, "status");
        return <Redirect to="/dashboard" />;
    }

  return (
    <>
      <Navbar />
      <Form
        form={form}
        style={{ marginTop: "25px" }}
        {...layout}
        name="basic"

        onFinish={
          () => {
            submitFrom(data)
          }

        }

        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input onChange={handleChange} value={data.name} name="name" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password onChange={handleChange} value={data.password} name="password" />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
        <ToastContainer autoClose={2000} />
          </Button>
          &nbsp;
          <Button type="submit" onClick={handleRegister}>
            Register now!
          </Button>
          &nbsp;
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

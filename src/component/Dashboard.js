import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'
import SideMenuBar from '../layout/sideMenuBar';
import { loginUsers } from '../Redux/Actions/LoginAction';
import CreateBlog from './Blogs/CreateBlog';
import DashBoardBlog from './Blogs/DashBoardBlog';

function Dashboard() {

    // useEffect(() => {
    //  dispatch()
        

    // }, [])
    console.log("dashboard");
    const states = useSelector(state => state.loginData)
    const dispatch = useDispatch(loginUsers)
    
    let status = true;
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const data=JSON.parse(user)
    console.log(token);

    if (token === null) {
        console.log(status, "status");
        status = false;
    }

    if (status === false) {
        console.log(status, "status");
        return <Redirect to="/" />;
    }
    console.log(states);
    return (
        <SideMenuBar>
       <div>
           
    <h1>wellcome {data.name}   &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp;  &emsp;  &emsp;  &emsp;   &emsp; &emsp; &emsp;  < CreateBlog /></h1>



                <hr/>
                <a><DashBoardBlog /></a>
           
       </div>
         
        </SideMenuBar>
            
    )
}

export default Dashboard

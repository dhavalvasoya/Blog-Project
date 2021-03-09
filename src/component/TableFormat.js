import React from 'react'
import { useSelector } from 'react-redux'
import SideMenuBar from '../layout/sideMenuBar'
import { Avatar, Image } from 'antd';
import { Redirect } from 'react-router-dom';

function TableFormat() {
    
    const blogState = useSelector(state => state.BlogDataReducer.blogData)
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
    // commentState
    return (
        <div>
            <SideMenuBar>
           
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Avtar</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>

                        {blogState && blogState.map(data => {
                            return (<tr>
                                <td><Avatar src={data.blogImgSrc} /></td>
                                <td>{data.blogTitle}</td>
                                <td>{data.desc}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </SideMenuBar>
        </div>
    )
}

export default TableFormat

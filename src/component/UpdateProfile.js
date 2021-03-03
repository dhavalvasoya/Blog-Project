import React from 'react'
import { Redirect } from 'react-router-dom';
import SideMenuBar from '../layout/sideMenuBar';

function UpdateProfile() {

    let status = true;
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const userProfile=JSON.parse(user)
    if (token === null) {
        status = false;
    }

    if (status === false) {
        return <Redirect to="/" />;
    }
    console.log(userProfile);
    return (
        <div>   
            <SideMenuBar >
                <h1>update profile</h1>
             <h3>name :- {userProfile.name}</h3>
            </SideMenuBar>
        </div>
    )
}

export default UpdateProfile

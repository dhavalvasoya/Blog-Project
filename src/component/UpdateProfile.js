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
                <h1>Your profile</h1>
             <h3>name :- {userProfile.name}</h3>
             <h3>email :- {userProfile.email}</h3>
             <h3>phoneNo :- {userProfile.phoneNo}</h3>
             <h3>course :- {userProfile.course}</h3>
             <h3>skill :- {userProfile.skill}</h3>
             <h3>country :- {userProfile.country}</h3>
             <h3>city :- {userProfile.city}</h3>
             <h3>address :- {userProfile.address}</h3>


            </SideMenuBar>
        </div>
    )
}

export default UpdateProfile

import React from 'react';
import {  signOut } from "firebase/auth";
import { auth } from './firebase-config';
import { useNavigate } from 'react-router-dom';
 
const Signout = () => {
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        console.log(error)
        });
    }
   
    return(
        <>
            <nav>
 
                <div>
        			<button onClick={handleLogout}>
                        Logout
                    </button>
        		</div>
            </nav>
        </>
    )
}
 
export default Signout;
import React from "react";
import { Link } from "react-router-dom";
import {ToastContainer} from "react-toastify"

function Signup(){
    return(
        <div className="container">
            <h1>Sign Up</h1>
            <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter your Name" autoFocus/>

            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter your email" />
                
            </div><div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter your password" />
                
            </div>
            <button>sign up</button>
            <span>already have an account ?  <span><Link to="/login"> Login</Link></span></span>
            
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signup
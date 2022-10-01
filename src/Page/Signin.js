import React,{useState} from 'react';
import {Link} from "react-router-dom";

function Signin(){
    
    return(
        <div>
            <form>
                ID : <input className ="signin_userid" type="text"></input>
                passwd : <input className ="signin_password" type="text"></input>
                <button>Login</button>
            </form>
        </div>
    )    
}

export default Signin;
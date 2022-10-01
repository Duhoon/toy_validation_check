import React,{useState} from 'react';
import './Signin.css';
import {Link} from 'react-router-dom';

function Signin(){

    return(
        <div>
                <Link to ="/">Login</Link>
             <form>
                <input className ="signin_userid" type="text"></input>
                <input className ="signin_password" type="text"></input>
                <button>Login</button>
                <button><Link to="/Signup">회원가입</Link></button>                
            </form>
        </div>
    )    
}

export default Signin;
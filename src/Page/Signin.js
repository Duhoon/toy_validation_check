import React,{useState} from 'react';

function Signin(){
    
    return(
        <div>
            <form>
                <input className ="signin_userid" type="text"></input>
                <input className ="signin_password" type="text"></input>
                <button>Login</button>
            </form>
        </div>
    )    
}

export default Signin;
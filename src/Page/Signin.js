import React,{useState} from 'react';
import './Signin.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Signin({loginHandler}){

    const [userId , setUserId] = useState(""); //ID 값 저장
    const [userPassword , setUserPassword] = useState(""); //Password 값 저장
    const [isValid, setIsValid] = useState(true);

    function handleId(e){
        setUserId(e.target.value);
    }

    function handlePassword(e){
        setUserPassword(e.target.value);
    }

    function clickLoginBtnHandler(){
        axios.post(`Localhost:4000`,{userId, userPassword})
        .then(res=>{
            // 로그인을 위해 더 필요한 작업들을 기입하세요.
            
            loginHandler();
        }).catch(err=>{
            setIsValid(false);
        })
    }

    // useEffect를 사용하면 token이나 OAuth를 통한 인증을 클라이언트에서 해결할 수 있을 것입니다.
    // 이 구현이 범용적으로 사용되기 위해서 useEffect는 사용하시는 분에게 구현을 맡기도록 하겠습니다.

    return(
        <div className="signin-form">
            <div className="input-group">
                <input className ="signin_userid" type="text" onChange={handleId} value={userId} placeholder="ID를 입력해주세요."></input>
            </div>
            <div className="input-group">
                <input className ="signin_password" type="password" onChange={handlePassword} value={userPassword} placeholder="비밀번호를 입력해주세요."></input>
                {isValid ? null : <p className="notice-error">아이디, 비밀번호 입력이 잘못되었습니다.</p> }
            </div>
            
            <div className="button-group">
                <button onClick={clickLoginBtnHandler}>Login</button>
                <Link to="/signup"><button>회원가입</button></Link>
            </div>
        </div>
    )    
}

export default Signin;
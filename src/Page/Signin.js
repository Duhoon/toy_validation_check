import React,{useState} from 'react';
import './Signin.css';
import {Link} from 'react-router-dom';

function Signin(){

//1. username에 text(id) 값을 입력 받음
//2. password에 text(passwd) 값을 받음
//3. Login 버튼을 눌렀을 때 찾는데 유저의 정보가 저장이 안되어 있으면 회원가입
//4. Login 버튼을 눌렀을 때 있으면 로그인 되었습니다.
//5. 각 태그에 이벤트 핸들러로 고차함수 적용
    let userId = [userId , setuserId] = useState("[]"); //ID 저장
    let userPasswd = [userPass , setuserPass] = useState("[]"); //Pass 저장

    function userId(el_id){
        return 
    }

    function userPasswd(el_pass){
        return
    }

    return(
        <div>
             <form>
                <input className ="signin_userid" type="text">{userId}</input>
                <input className ="signin_password" type="text">{userPasswd}</input>
                <button>Login</button>
                <button><Link to="/Signup">회원가입</Link></button>                
            </form>
        </div>
    )    
}

export default Signin;
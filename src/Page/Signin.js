import React,{useState} from 'react';
import './Signin.css';
import {Link} from 'react-router-dom';
import Validation from '../Validation/Validation.js'

function Signin(){

    //1. userid에 text(id) 값을 입력 받음 < html
        // 1-1. 컴포넌트 안에서 userId state를 만들고 저장
        // 1-2. userId 길이가 0 보다 커야 유효성 통과
    //2. password에 text(passwd) 값을 입력 받음 < html
        // 2-1. 컴포넌트 안에서 userPasswd state를 만들고 저장
        // 2-2. userPasswd 길이가 0 보다 커야 유효성 통과
    //3. Login 버튼을 눌렀을 때 userId 에 유효성 통과가 됬고,
    //   userPasswd가 유효성 통과가 됬으면 = > success
    //   아니면 ? 입력해달라고 안내문구 출력


// 유저의 정보가 저장이 안되어 있으면 회원가입
//4. Login 버튼을 눌렀을 때 있으면 로그인 되었습니다.
//5. 각 태그에 이벤트 핸들러로 고차함수 적용

    // 어떤 관리를 하려고 하셨나요.
    // 값이 하나하나 저장이 될것
    // 스트링을 저장해서 가져오는 것보다 나아서.

    const [userId , setuserId] = useState(""); //ID 저장
    const [userPasswd , setuserPass] = useState(""); //Pass 저장

    function handleId(e){ //이벤트 값들을 인자로 받는 것
        
        console.log(e);

        setuserId(e.target.value);
    }

    function handlePasswd(e){
        setuserPass(e.target.value);
    }

    function ValidPassword(){
        if(userPasswd.length === 0){
            console.log(userPasswd);
            return(<div>Password 입력해주세요.</div>)
        }
        else if(userPasswd.length > 0){
            console.log(userPasswd);
            return(<div>입력 완료</div>)
        }
    }

    return(
        <div className="signin-form"> 
            <div className="input-group">
                <input className ="signin_userid" type="text" onChange={handleId} value={userId} placeholder="ID를 입력해주세요."></input>
            </div>
            <div className="input-group">
                <input className ="signin_password" type="text" onChange={handlePasswd} value={userPasswd} placeholder="비밀번호를 입력해주세요."></input>
            </div>
            
            <div className="button-group">
                <button>Login</button>
                <Link to="/signup"><button>회원가입</button></Link>
            </div>
        </div>
    )    
}

export default Signin;
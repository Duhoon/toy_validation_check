import {useState} from "react";
import './Mypage.css';


function Mypage ({logoutHandler}){
    // 저장하고 싶은 정보들을 state로 관리하면 될 것 같습니다.


    const clickLogoutBtnHandler = ()=>{
        // 로그아웃 시 필요한 로직을 작성하면 되겠습니다.
        logoutHandler();
    }

    return (
        <div>
            <div className="mypage-info">
                <p>로그인에 성공하였습니다.</p>
            </div>
            <button onClick={clickLogoutBtnHandler}>로그아웃</button>
        </div>
    )
}

export default Mypage;
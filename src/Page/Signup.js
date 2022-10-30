import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css";
import Input from "./Component/Input";
import Validation from '../Validation/validation';
import axios from 'axios';

function Signup() {

  // 저장하고 싶은 정보의 state만 남겨놓고 사용하시면 됩니다.
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirm, setUserConfirm] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  // 저장하는 정보의 갯수를 new Array(갯수)에 기입해주시면 됩니다.
  const [validCheck] = useState(new Array(5).fill(false));

  function handleInput(setter, validFunc, order) {
    return (event) => {
      let value = event.target.value;
      setter(value);
      /// 기본으로 제공되는 입력 중 2번째 입력은 비밀번호를 확인하는 입력입니다.
      // 필요없는 정보라면 아래의 조건문과 문장을 삭제하고, else 까지 지우고 사용시면 됩니다.
      if (order === 2) validCheck[order] = (userPassword === value);
      else validCheck[order] = validFunc(value);
    };
  }

  function handleSubmit(event) {
    if (validCheck.reduce((result, cur) => !cur ? false : result)) {
      // 저장하고 싶은 정보의 입력만 남겨놓고 사용하시면 됩니다.
      axios.post(`localhost:4000/signin`, {
        userId, userPassword, userEmail, userPhoneNumber
      })
        .then((res) => {
          // 회원 가입이 정상적으로 끝났을 때 처리하고 싶은 로직을 작성하시면 되겠습니다.
          window.location.assign("/");
        }).catch(err => {
          alert("회원 정보를 저장하는 과정에서 문제가 발생했습니다.");
        });
    }
    else alert("입력하신 정보 중 유효하지 않은 항목이 존재합니다.");
  }


  // 저장하고 싶은 정보의 입력만 남겨놓고 사용하시면 됩니다.
  // 단 입력되는 숫자를 0 부터 순서대로 맞춰주셔야 합니다.
  return (
    <div className="signup-form">
      <Input
        className="signup_userid"
        placeholder="아이디를 입력해주세요."
        changeHandler={handleInput(setUserId, Validation.signupIdCheck, 0)}
        value={userId}
        valid={validCheck[0]}
        valid_message="아이디는 영어 대문자, 소문자, 숫자로 5 글자 이상 입력해 주세요." />
      <Input
        className="signup_password"
        placeholder="비밀번호를 입력해주세요."
        changeHandler={handleInput(setUserPassword, Validation.signupPasswordCheck, 1)}
        value={userPassword}
        valid={validCheck[1]}
        valid_message="비밀번호는 특수문자 !@#$%^&*_- 와 영어 알파벳, 숫자가 각각 한 개씩 포함되게 8자 이상으로 작성해주세요."
        type="password" />
      <Input
        className="signup_password_confirm"
        placeholder="입력하신 비밀번호를 똑같이 입력해주세요."
        changeHandler={handleInput(setUserConfirm, () => { }, 2)}
        value={userConfirm}
        valid={validCheck[2]}
        valid_message="입력하신 비밀번호와 일치하지 않습니다."
        type="password" />
      <Input
        className="signup_email"
        placeholder="이메일을 입력해주세요."
        changeHandler={handleInput(setUserEmail, Validation.signupEmailCheck, 3)}
        value={userEmail}
        valid={validCheck[3]}
        valid_message="입력하신 이메일은 유효하지 않습니다." />
      <Input
        className="signup_phonenumber"
        placeholder="전화번호를 '-'를 포함하여 입력해주세요."
        changeHandler={handleInput(setUserPhoneNumber, Validation.signupPhonenumberCheck, 4)}
        value={userPhoneNumber}
        valid={validCheck[4]}
        valid_message="입력하신 번호는 유효하지 않습니다." />
      <div className="button-group">
        <button onClick={handleSubmit}>가입하기</button>
        <Link to="/"><button type="button">돌아가기</button></Link>
      </div>
    </div>
  );
}

export default Signup;
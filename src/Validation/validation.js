

export default {
    /* 로그인 페이지 유효성 검사*/

    signinIdCheck : (id)=>{
        return id.length > 0 ? true : false;
    },

    signinPasswordCheck : (password)=>{
        return password.length > 0 ? true : false;
    },

    /* 회원가입 페이지 유효성 검사 */

    signupIdCheck : (id)=>{
        let checkRegExp = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\w{8,}/ ;
        return checkRegExp.test(id);
    },

    signupPasswordCheck : (password)=>{
        let checkRegExp = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/
        return checkRegExp.test(password);
    },

    signupEmailCheck : (email)=>{
        let checkRegExp = /^[\w][\w]*@/
    },

}

// userId 함수 -> 입력받는 텍스트 값을 입력을 받으면 그것을 배열에 넣고
// 순서도?
// 두 함수에 어떻게 입력이 들어올까요? 이벤트에서 넣어야 된다고요?
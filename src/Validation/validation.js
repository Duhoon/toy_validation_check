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
        let checkRegExp = /^[\w_-]{5,}$/ ;
        return checkRegExp.test(id);
    },

    signupPasswordCheck : (password)=>{
        let checkRegExp = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*_-])[\w!@#$%^&*_-]{8,}$/ ;
        return checkRegExp.test(password);
    },

    signupEmailCheck : (email)=>{
        let checkRegExp = /^[\w!@#$%^&*`+\-/{|}~](\.?[\w!@#$%^&*`+\-/{|}~])*@(?=.*\.)[\w]([\-\.]?[\w])*\w$/ ;   
        return checkRegExp.test(email);
    },

    signupPhonenumberCheck : (phonenumber) => {
        console.log(typeof phonenumber);
        let checkRegExp = /^0[\d]{1,2}-[\d]{3,4}-[\d]{4}$/ ;
        return checkRegExp.test(phonenumber);
    }

}
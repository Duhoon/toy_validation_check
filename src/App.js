import './App.css';
import {useState} from "react";
import Mypage from './Page/Mypage';
import Signin from './Page/Signin';
import Signup from './Page/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = ()=>{
    setIsLogin(true);
  }

  const logoutHandler = ()=>{
    setIsLogin(false);
  }

  return (
    <BrowserRouter>
    <div className="App">
      { isLogin ? <Mypage logoutHandler={logoutHandler} /> : 
      <Routes>
        <Route path="/" element={<Signin  loginHandler={loginHandler} />}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      }
    </div>
    </BrowserRouter>
  );
}

export default App;

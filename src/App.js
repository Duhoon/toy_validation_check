import './App.css';
import Signin from './Page/Signin';
import Signup from './Page/Signup';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Signin/>
    </div>
  );
}

export default App;

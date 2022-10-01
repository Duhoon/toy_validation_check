import './App.css';
import Signin from './Page/Signin';
import Signup from './Page/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="./Page/Signin" element={<Signin/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

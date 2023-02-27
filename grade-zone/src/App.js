
import logo from './logo.svg';
import './App.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Signup } from './pages/Authentication/Signup';
import Authentication from './pages/Authentication/Authentication';
import { Signin } from './pages/Authentication/Signin';



const App = () => {


  return (

    <div className='app'> 
         <BrowserRouter>
          <Routes>
              <Route path="/" element={<Signin/>}/>
              <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </BrowserRouter> 
    </div>
  )
}

export default App
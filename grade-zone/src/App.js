import logo from './logo.svg';
import './App.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Signup } from './pages/Authentication/Signup';
import Authentication from './pages/Authentication/Authentication';
import { Signin } from './pages/Authentication/Signin';



const App = () => {


// const access=localStorage.getItem("access");
// console.log(access)


  return (
    <div className='app'> 
         <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Authentication/>}>
                 <Route index element={<Signin/>}/>
               <Route path="up"  element={<Signup />}/>
               <Route path="in" element={<Signin/>}/>
            </Route>
            </Routes>
            </BrowserRouter> 
         
       
    </div>
  )
}

export default App
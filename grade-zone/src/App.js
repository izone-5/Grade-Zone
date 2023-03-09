
import logo from './logo.svg';
import './App.scss';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Signup } from './pages/Authentication/Signup';
import { Signin } from './pages/Authentication/Signin';
import PrivateRoutes from './pages/Protected';
import AppPages from './pages/AppPages';
import Homepage from './pages/Homepage/Homepage';
import NoPage from './pages/Nopage';
import Authentication from './pages/Authentication/Authentication';




const App = () => {


  return (

    <div className='app'> 
         <BrowserRouter>
          <Routes>
              <Route path="/" element={<Signin/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route element={<PrivateRoutes access={true} />}>
                <Route element={<AppPages />}>
                    <Route path="homepage" element={<Homepage />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="auth" element={<Authentication />} />
                </Route>
              </Route>
          </Routes>
        </BrowserRouter> 
    </div>
  )
}

export default App
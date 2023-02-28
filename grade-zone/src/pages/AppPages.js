import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';


const AppPages = () => {
  return (
    <div className='apppages'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default AppPages

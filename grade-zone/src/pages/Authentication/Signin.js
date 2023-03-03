import './Signin.scss'
import 'remixicon/fonts/remixicon.css'
import banner from '../../assets/user.png'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik';
import axios from 'axios';
import '../../mockApi/api'

export const Signin = () => {
    const initialValues = {
   password:'',
      email:'',
}
 const {values, handleBlur, handleChange, handleSubmit, handleReset} = useFormik({
      initialValues,
      
      onSubmit: async (values) => {
       const {data} = await axios.post('/signin', values )
       console.log(data)
         handleReset()
         
      }

   })
  return(
        <div className='signin' >
            <div className='container'>
                <div className='outer'>
                    <div className='inner'>
                        <p className='welcome'>Welcome Back</p>
                        <h3>Login your account</h3>
                        <form onSubmit={handleSubmit}>
                            <ul>
                                
                                <li>
                                    <i className="ri-lock-line"></i>
                                    <input autoComplete='off' type='text' name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}  />
                                </li>
                                <li>
                                    <i className="ri-mail-line"></i>
                                    <input autoComplete='off' type='text' name='email' value={values.email} onBlur={handleBlur} onChange={handleChange} />
                                </li>
                                <li>
                                    <a>Forgotten password?</a>
                                </li>
                            
                            </ul>
                            <button type='submit'>Continue</button>
                        </form>
                       
                        
                        <p>New Member?  <Link to='/signup'>Register here</Link></p>
                    </div>
                </div>

                <div className='outer'>
                    <img src={banner} />
                </div>
            </div>
        </div>
    )
}

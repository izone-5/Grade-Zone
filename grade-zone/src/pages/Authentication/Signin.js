import './Signin.scss'
import 'remixicon/fonts/remixicon.css'
import banner from '../../assets/user.png'
import { Link } from 'react-router-dom'
import {Formik, Form, Field} from 'formik';
import axios from 'axios';
import '../../mockApi/api'
import {useNavigate } from 'react-router-dom';

export const Signin = () => {
    const navigate = useNavigate();
    const initialValues = {
   password:'',
      email:'',
}
   const onSubmit = async (values, actions) => {
    const {data} = await axios.post('/signin', values )
      actions.resetForm()
      navigate('homepage')
      console.log(data)

   }
  return(
        <div className='signin' >
            <div className='container'>
                <div className='outer'>
                    <div className='inner'>
                        <p className='welcome'>Welcome Back</p>
                        <h3>Login your account</h3>
                        <Formik initialValues={initialValues}>
                            <Form onSubmit={onSubmit}>
                                <ul>
                                    
                                    <li>
                                        <i className="ri-lock-line"></i>
                                        <Field autoComplete='off' type='text' name='password' />
                                    </li>
                                    <li>
                                        <i className="ri-mail-line"></i>
                                        <Field autoComplete='off' type='text' name='email' />
                                    </li>
                                    <li>
                                        <a>Forgotten password?</a>
                                    </li>
                                
                                </ul>
                                <button type='submit'>Continue</button>
                            </Form>
                        </Formik>
                       
                        
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

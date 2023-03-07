import {useFormik} from 'formik';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Signup.scss'
import '../../mockApi/api'
import { getProfileData } from '../../redux/authSlice';
import banner from '../../assets/user.png'
import { Link } from 'react-router-dom'
import { signupSchema } from '../../schemas';


const initialValues = {
   name: '',
   email:'',
   occupation:'',
   gender:'',
   password:'',
   cpassword:''

}
export const Signup = () => {
 const {values, handleBlur, handleChange, handleSubmit, handleReset, errors, touched} = useFormik({
      initialValues,
      validationSchema:signupSchema,
      onSubmit: async (values) => {
       const {data} = await axios.post('/signup', values )
       console.log(values.email)
      
       
         handleReset()
         
      }

   })

  return (
   <div className='signup' >
      <div className='container'>

         <div className='outer banner'>
            <div>
               <img src={banner} />
               <p>Already have an account? <Link to='/'>Sign in</Link></p>
            </div>
         </div>

         <div className='outer form'>
            <div className='inner'>
                  <div className='create-account'>
                     <h3>Create account</h3>
                     <p className='detail'>Enter your details below</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                     <ul>
                        <li>
                           <div>
                              <input autoComplete='off' type='text' name='name' placeholder='Full Name' value={values.name} onBlur={handleBlur} onChange={handleChange} />
                              {errors.name &&  touched.name && <p className='form_error'>{errors.name}</p>}
                           </div>
                        </li>
                        <li>
                           <div>
                              <input autoComplete='off' type='text' name='email' placeholder='Email' value={values.email} onBlur={handleBlur} onChange={handleChange}  />
                              {errors.email &&  touched.email && <p className='form_error'>{errors.email}</p>}
                           </div>
                        </li>
                        <li>

                           <div>
                              <select name="occupation" id="occupation" value={values.occupation} onBlur={handleBlur} onChange={handleChange} >
                                 <option>--Occupation--</option>
                                 <option value="worker">Worker</option>
                                 <option value="professional">Professional</option>
                              </select>
                              {errors.occupation &&  touched.occupation && <p className='form_error'>{errors.occupation}</p>}
                           </div>
                           
                           <div>
                              <select name="gender" id="gender" value={values.gender} onBlur={handleBlur} onChange={handleChange} >
                                 <option>--Gender--</option>
                                 <option value="male">Male</option>
                                 <option value="female">Female</option>
                              </select>
                              {errors.gender &&  touched.gender && <p className='form_error'>{errors.gender}</p>}
                           </div>
                        </li>
                        <li>
                           <div>
                              <input autoComplete='off' type='text' name='password' placeholder='Password' value={values.password} onBlur={handleBlur} onChange={handleChange}  />
                              {errors.password &&  touched.password && <p className='form_error'>{errors.password}</p>}
                           </div>
                           
                           <div>
                              <input autoComplete='off' type='text' name='cpassword' placeholder='Confirm Password' value={values.cpassword} onBlur={handleBlur} onChange={handleChange} />
                              {errors.cpassword &&  touched.cpassword && <p className='form_error'>{errors.cpassword}</p>}
                           </div>
                           
                        </li>
                     </ul>
                     <button type='submit'>Continue</button>
                  </form>
                 
            </div>
         </div>  
      </div>
   </div>
  
          )
}

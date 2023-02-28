import React,{useState} from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Signup.scss'
import '../../mockApi/MockApi'
import { getProfileData } from '../../redux/authSlice';
import banner from '../../assets/user.png'
import { Link } from 'react-router-dom'


export const Signup = () => {
   
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
                  <ul>
                     <li>
                        <div><input autoComplete='off' type='text' name='full-name' placeholder='Full Name' /></div>
                        <div><input autoComplete='off' type='text' name='email' placeholder='Email' /></div>
                     </li>
                     <li>
                        <label for="occupation">Occupation:</label>
                        <select name="occupation" id="occupation">
                           <option value="worker">Worker</option>
                           <option value="professional">Professional</option>
                        </select>
                        
                        <label for="gender">Gender:</label>
                        <select name="gender" id="gender">
                           <option value="male">Male</option>
                           <option value="female">Female</option>
                        </select>
                     </li>
                     <li>
                        <div><input autoComplete='off' type='text' name='password' placeholder='Password' /></div>
                        <div><input autoComplete='off' type='text' name='confirm-password' placeholder='Confirm Password' /></div>
                     </li>
                  </ul>
                  <button>Continue</button>
            </div>
         </div>

         
      </div>
   </div>
  
          )
}

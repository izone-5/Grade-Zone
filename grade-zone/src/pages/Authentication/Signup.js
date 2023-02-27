import React,{useState} from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Style from './Signup.module.scss'
import '../../mockApi/MockApi'
import { getProfileData } from '../../redux/authSlice';


export const Signup = () => {
   
  return (
     <div className={Style.signin}>
        <h2>Create account</h2>
        <h5>Enter your details below </h5>
        <form >
          <input type='text' placeholder='full name' /><br/>
          <input type='text' placeholder='Email' /><br/>
           <select><option value='gender' >Gender</option>
           <option value='male' >Male</option>
           <option value='female'>Female</option>
           </select><br/>
           <select><option value='gender' >Occupation</option>
           <option value='male'>tach</option>
           <option value='female'>coder</option>
           </select>
            <div className='inputWrapper'>
            <input type='password' placeholder='password' />
            <input type='password' placeholder='confirm password' />
          
            </div>
        </form>
     </div>
          )
}

import './Signin.scss'
import 'remixicon/fonts/remixicon.css'
import banner from '../../assets/user.png'
import { Link } from 'react-router-dom'

export const Signin = () => {

  return(
        <div className='signin' >
            <div className='container'>
                <div className='outer'>
                    <div className='inner'>
                        <p className='welcome'>Welcome Back</p>
                        <h3>Login your account</h3>
                        <ul>
                            <li><i className="ri-lock-line"></i><input autoComplete='off' type='text' name='password' placeholder='Password' /></li>
                            <li><i className="ri-mail-line"></i><input autoComplete='off' type='text' name='email' placeholder='Email'/></li>
                            <li><a>Forgotten password?</a></li>
                        </ul>
                        <button>Continue</button>
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

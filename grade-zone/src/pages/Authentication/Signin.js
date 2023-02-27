import './Signin.scss'
import 'remixicon/fonts/remixicon.css'
import banner from '../../assets/user.png'

export const Signin = () => {

  return(
        <div className='signin' >
            <div className='container'>
                <div className='outer'>
                    <div className='inner'>
                        <p className='welcome'>Welcome Back</p>
                        <h3>Login your account</h3>
                        <ul>
                            <li><i className="ri-lock-line"></i><input autoComplete='off' type='password' name='password' /></li>
                            <li><i className="ri-mail-line"></i><input autoComplete='off' type='email' name='email' /></li>
                            <li><a>Forgotten password?</a></li>
                        </ul>
                        <button>Continue</button>
                        <p>New Member?  <a>Register here</a></p>
                    </div>
                </div>

                <div className='outer'>
                    <img src={banner} />
                </div>
            </div>
        </div>
    )
}

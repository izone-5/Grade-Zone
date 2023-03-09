import React from 'react'
import lock from '../../assets/lock.png'
import style from './Authentication.module.scss'

const Authentication = () => {
  return (
    <div className= {style.authentiacation}>
      <div className={style.mainContainer}>
        <div className={style.container}>
         <img src={lock} alt="lock"/>
      </div>
      <div className={style.outerContainer}>
       <div className={style.inner}>
        <h3>Authenticate your account</h3>
        <small>your OTP has been send to ******gmail.com</small>
       </div>
       <div className={style.otp}>
        <p>2</p>
         <p>5</p>
        <p>9</p>
        <p>8</p>
       </div>
       <p>Haven'nt receiveid a code? Resend in <span>1:59 mins</span></p>
       <div className={style.icon}>
        <p>
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
          Back
          </p>
          <button>Submit</button>
       </div>
      </div>
      </div>
     
    </div>
  )
}

export default Authentication
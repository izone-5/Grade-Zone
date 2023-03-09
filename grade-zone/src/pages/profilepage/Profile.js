import React from 'react'
import logo from '../../assets/logo.png';
import main from '../../assets/main.png'
import minor from '../../assets/minor.png'
import "./Profile.scss"

const Profile = () => {
  return (
    <div className='container'>
      <nav>
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
        <img src={logo} alt="logo"/>
      </nav>
      <div className='profile-container'>
        <div className='main-profile'>
         <img src={main} alt="user main profile"/>
        </div>
           <div className='minor'>
                <img src={minor} alt="minor profile"/>
                <p>
                    <i class="fa fa-camera" aria-hidden="true"></i>
                </p>
                
          
            </div>
        <div className='minor-profile'>
           
            <div className='name'>
                <h3>Ekenze Precious Anurika</h3>
                <p>Joined January 2021</p>
                <p>Edit Profile</p>
            </div>
            <div className='help'>
                <p>Request Help <br/><span>8/12</span></p>
                <p>Pending Help  <br/><span>4</span></p>
                <p>Assisted  <br/><span>7/9</span></p>
                <p>Donated  <br/> <i class="fa fa-thumbs-up" aria-hidden="true"></i></p>
                <p>Verified <br/><i class="fa fa-star" aria-hidden="true"></i></p>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

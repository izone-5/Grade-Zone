import React from 'react'
import logo from '../../assets/logo.png';
import message from '../../assets/message.png';
import users from '../../assets/Vector1.png';
import user from '../../assets/Vector2.png';
import minor from '../../assets/minor.png'
import download1 from '../../assets/download1.png'
import download2 from '../../assets/download2.png'
import download3 from '../../assets/download3.png'
import download4 from '../../assets/download4.png'
import download5 from '../../assets/download5.png'
import debby from '../../assets/debby.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import love from '../../assets/love.png'
import vector4 from '../../assets/Vector4.png'
import "./Homepage.scss"

const Homepage = () => {
  return (
    <div className="homepage">
      <nav>
        <img src={logo} alt="logo" />
        <div className='notification'>
          <i className="fa fa-home" aria-hidden="true"></i>
          <img src={message} alt="camera"/>
          <i className="fa fa-bell-o" aria-hidden="true"></i>
           <img src={users} alt="users icon"/>
           <img src={user} alt="user icon"/>
        </div>
        <div className='username'>
            <p>Ekenze Precious</p>
            <img src={minor} alt="user "/>
             <p>UI/UX Designer</p>
        </div>
       
      </nav>
      <div className='main-container'>
        <div className='users'>
          <img src={download5} alt="download"/>
          <img src={download4} alt="download"/>
           <img src={download4} alt="download"/>
            <img src={download5} alt="download"/>
        </div>
         <div className='posts'>
          <div className='new-post'>
            <img src={minor} alt="user "/>
            <input type='text' name='post' placeholder="create a post"/>
          </div>
          <div className='icon'>
            <img src={icon1} alt="icon"/>
             <img src={icon2} alt="icon"/>
          </div>
        </div>
        <div className='post-container'>
          <div className='user-post'>
            <img src={debby} alt="debby" />
            <h4>Deborah Salt Obichere</h4>
            <p> 8mins ago 
              <i className="fa fa-globe" aria-hidden="true"></i>
            </p>
          </div>
          <div className='desc-container'>
            <div className='desc'>
              <p>The real Valentine for every true believer is not <br/> 
              14th February. The real Valentine , real Lovers day <br/> for every true believer is the good Friday. the day <br/> our God gave us the ultimate gift and Love... <span>Read More</span></p>
            </div>
            <div className='user-des'>
              <img src={debby} alt="debby" />
               <img src={debby} alt="debby" />
            </div>
            <div className='react'>
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
              <p>3.5K</p>
            </div>
            <div className='reactions'>
                <p><i className="fa fa-thumbs-up" aria-hidden="true"></i>
                React
                </p>
                <p>
                <i className="fas fa-hand-holding-heart"></i>
                 Donate
                </p>
                <p>
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>
                  Repost
                </p>
              </div>
                <div>
                   <img src={download1} alt="Post"/>
                   <input type='text' placeholder='Write your comment'/>
                   <img src={vector4} alt="Post"/>
                </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Homepage

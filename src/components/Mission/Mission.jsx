import React from 'react'
import aboutImg from '../../assets/about.jpg'
import './mission.css'

const Mission = () => {

  return (
    <div className='mission'>
    <div className='mission-left'>
      <img className='mission-img' src={aboutImg} alt='Our Mission' />
    </div>

    <div className='mission-right'>
    
      <p>
        We are dedicated to improving the lives of those in need through
        education, empowerment, and community outreach. Our mission is to
        make a lasting impact on society by providing resources, support,
        and opportunities for growth.
      </p>
      <p>
        By working hand in hand with communities, we aim to create a future
        where everyone has access to the tools they need to succeed.
      </p>
      <p>
        Together, we can transform lives, inspire hope, and build a stronger,
        more inclusive world for all.
      </p>
    </div>
  </div>
   )
}

export default Mission
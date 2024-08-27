import React from 'react';
import aboutImg from '../../assets/about.jpg';
import './about.css';

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img className='about-img' src={aboutImg} alt='' />
      </div>
      <div className='about-right'>
        <h3>ABOUT MANDISHA</h3>
        <h2>Empowering Communities for a Better Tomorrow</h2>
        <p>Our NGO is committed to making a positive impact through education, community outreach, and empowerment. With a vision rooted in integrity and compassion, we aim to build a brighter future for all.</p>
        <p>Join us in our journey towards sustainable change and community development.</p>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import './donation.css';

const Donation = () => {
  return (
    <section className='donation-container'>
      <div className='donation-overview'>
        <p>Your contributions directly impact the lives of those we serve. Choose how you’d like to get involved:</p>
      </div>

      <div className='donation-options'>
        <div className='donation-box'>
          <h4>Donate</h4>
          <p>Make a one-time or recurring donation and help us continue our mission. Your support goes directly towards essential programs and services.</p>
        </div>
        <div className='donation-box'>
          <h4>Fundraising</h4>
          <p>Host your own fundraiser or join one of our events to raise funds and awareness for our cause. Get your community involved in making a difference.</p>
        </div>
        <div className='donation-box'>
          <h4>Advocacy</h4>
          <p>Become a voice for change by participating in our advocacy campaigns. Help us push for policies that support our mission and the communities we serve.</p>
        </div>
      </div>
    </section>
  );
};

export default Donation;

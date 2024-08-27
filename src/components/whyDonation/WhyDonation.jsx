import React from 'react';
import './whyDonation.css';

const WhyDonation = () => {
  return (
    <section className='why-donation'>
      <div className='why-donation-content'>
        <p>Your contribution is crucial in driving our mission forward. Every donation helps us provide essential services, create impactful programs, and support those in need. Together, we can make a significant difference in the lives of individuals and communities.</p>
        
        <div className='cards-container'>
          <div className='card donation-options'>
            <h3>Donation Options</h3>
            <ul>
              <li>Online: Simple and secure online donations through our website.</li>
              <li>Bank Transfer: Direct transfers to our bank account.</li>
              <li>In-Kind: Donations of goods or services that support our cause.</li>
            </ul>
          </div>

          <div className='card success-stories'>
            <h3>Success Stories</h3>
            <p>See how your donations have made a real impact through stories and testimonials from those we’ve helped. Every story is a testament to the positive change your support brings.</p>
          </div>

          <div className='card recurring-donations'>
            <h3>Recurring Donations</h3>
            <p>Consider setting up a monthly donation to provide ongoing support. Recurring donations help us plan long-term projects and ensure a steady flow of resources where they’re needed most.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyDonation;

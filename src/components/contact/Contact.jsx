import React from 'react';
import MessageIcon from '@mui/icons-material/Message';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import LoopIcon from '@mui/icons-material/Loop';
import './contact.css';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "28cf29a2-071e-4197-8dd8-93ed6cdb624a");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-form-section">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input name='Name' type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input name='Phone' type="tel" id="name" placeholder="Phone No." />
          </div>
          <div className="form-group">
            <input name='Email' type="email" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <textarea name='message' id="message" rows="5" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn dark-btn">Send Message <SendIcon/> </button>
        </form>
        <span>{result}</span>
      </div>
      <div className="contact-info-section">
        <h2>Send us a message <MessageIcon /> </h2>
        
        <p><strong><HomeIcon/></strong> 1234 Street, City, Country</p>
        <p><strong><MailOutlineIcon/></strong> example@example.com</p>
        <p><strong><LocalPhoneIcon/></strong> +123 456 7890</p>
        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="#" className="social-link"><FacebookIcon/></a>
          <a href="#" className="social-link"><TwitterIcon/></a>
          <a href="#" className="social-link"><LinkedInIcon/></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

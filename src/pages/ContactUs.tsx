import React from 'react';
import '../styles/contactUs.scss'; // Import the SCSS file for styling
import Footer from '../components/footer';
import { motion } from 'framer-motion';



const ContactUs: React.FC = () => {
  return (
    <>

    <div className="contact-container">
        <img src="/assets/bee.png" alt="beeA" className="beeA"/>
        <h1> fill out the form to join our waiting list - we'll be in touch soon</h1>
        <form className="contact-form-form" action="/SpringBootEndPointHere" method="post">
          <div className='InputContainer'>
              <h2>Name</h2>
              <input className='txtbox nameInput'type="text" placeholder="Enter your name" required />
          </div>
          <div className='InputContainer'>
              <h2>Email</h2>
              <input className='txtbox emailInput' type="text" placeholder="Enter your email" required autoComplete="on" />
          </div>
          <div className='SubmitButtonContainer'>
              <button value="Submit" className="SubmitButton">Submit</button>
          </div>
        </form>
    
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;

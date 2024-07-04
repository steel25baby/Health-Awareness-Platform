import React from 'react'
import "./Contact.css"
import { Link } from 'react-router-dom'
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Media = ({ Name, icon  }) => {
  return (
       
    <div className="Media">
      <div className="Aboutus-icon-wrapper">{icon}</div>
      <h3>{Name}</h3>
    </div>
  );
};


const Contact = () => {
  return (
    <>
     <section className="socials">
    <div
     className='RegisterWrapper'>
          <h1>Contact Us</h1>
          <p>feel free to contact us any time. we will get back to you as soon as we can</p>
          <div className='CustomerDetails'>
          <label htmlFor="fullname">Full name</label>
          <input 
          type="text" 
          id='fullname'
          className='inputDetails'
          placeholder='Full Name'
          />
        </div>
        <div className='CustomerDetails'>
          <label htmlFor="email">Email Address</label>
          <input 
          type="email" 
          id='email'
          className='inputDetails'
          placeholder='Email Address'
          />
        </div>
        <div className="CustomerDetails">
          <label htmlFor="message">Message</label>
          <input
           type="text"
           id="message"
           className="inputDetails"
           placeholder="Message"
            />
        </div>
        <div className="CustomerButton">
          <button className="form-button">send</button>
        </div>

        </div>
        <div className="Contacts">
      <div className="Contacts-header">Contacts</div>
      <div className="Contacts-icons">
        <Media icon={<RiInstagramFill/>} Name="Instagram"/>
        <Media icon={<FaFacebookSquare/>} Name="FaceBook"/>
        <Media icon={<FaSquareXTwitter/>} Name="Twitter"/>
      </div>
  </div>
    </section>
    
    </>
  )
}

export default Contact
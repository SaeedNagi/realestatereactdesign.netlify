import React from 'react'
import '../Styling/Contact.css';
export default function Contact() {
  return (
    <>
    <div className="cont">
        <div className="ilove">
          <h2>Send us a message today</h2>
          <input type="text" name="text" id="text" placeholder='Enter your full name here' /><br/>
          <input type="text" name="text" id="text" placeholder='Enter your email here' /><br/>
          <input type="text" name="text" id="text" placeholder='Enter your phone number' /><br/>
          <textarea name="" id="" placeholder='Enter your message here'></textarea><br/>
          <button type="button">SEND EMAIL</button>
        </div>
        <div className="ilove1">
            <h4>REACH US</h4>
            <h2>Get in touch with us today and our team will assist you</h2>
            <p>Our experts and developers would love to contribute their expertise and insights and help you today. Contact us to help you plan your next transaction, either buying or selling a home.</p>
            <button type="button">SEND EMAIL</button>
        </div>
     </div>
    </>
  )
}

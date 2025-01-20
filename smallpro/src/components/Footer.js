import React from 'react'
import '../Styling/Footer.css';
import icons8instagramlogo from '../Images/icons8instagramlogo.png';
import icons8facebooklogo from '../Images/icons8facebooklogo.png';
import icons8twitterlogo from '../Images/icons8twitterlogo.png';
import icons8youtubelogo from '../Images/icons8youtubelogo.png';
import icons8building from '../Images/icons8building.png';
// import icons8_uparrow from '../Images/icons8_uparrow.png';
import icons8email from '../Images/icons8email.png';
import prop7B0oLsg from '../Images/prop7B0oLsg.jpg';
import prop7B0 from '../Images/prop7B0.jpg';
export default function Footer() {
  return (
   <>
   <div className="footer-head">
          <div className='footer1'>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, placeat? Odit aliquam, maiores ducimus perspiciatis cupiditate dolorum sit repellendus nulla?</p>
            <div className='facebook'>
           <div className='facebook1'><img src={icons8facebooklogo} alt="" /></div>
           <div className='facebook1'><img src={icons8instagramlogo} alt="" /></div>
           <div className='facebook1'><img src={icons8twitterlogo} alt="" /></div>
           <div className='facebook1'><img src={icons8youtubelogo} alt="" /></div>
            </div>
            <p>Copyright Real Estate, All Rights Reserved</p>
           </div>
           <div className='footer1'>
            <h2>Contact Us</h2>
            <div className='faat'>
           <div className='feet'><img src={icons8building} alt="" /> <p>10845 Griffith Peak Dr, Las Vegas, NV 89135</p></div> 
            <div className='feet'><img src={icons8building} alt="" /> <p>+91 879 098 8901</p></div>
            <div className='feet'><img src={icons8building} alt="" /> <p>+91 123 678 0912</p></div>
            <div className='feet'><img src={icons8email} alt="" /> <p>office23@gmail.com</p></div>
            </div>
           </div>
           <div className='footer1'>
         <h2>Latest Properties</h2>
         <div className='item1'>
            <div className='move'><img src={prop7B0oLsg} alt="" /></div>
            <div>
            <p>Villa with amazing view</p>
            <p>$ 278.98</p>
            </div>
         </div>
         <div className='item1'>
            <div className='move'><img src={prop7B0} alt="" /></div>
              <div>
                 <p>Sea View Villa</p>
                 <p>$ 789.23</p>
               </div>
           </div>
          </div>
    </div>
  </>
  )
}

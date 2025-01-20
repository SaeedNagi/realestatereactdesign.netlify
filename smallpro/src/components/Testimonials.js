import React from 'react'
import '../Styling/Testimonials.css';
import client1 from '../Images/client1.png';
import client2 from '../Images/client2.png';
import client3 from '../Images/client3.png';
import client4 from '../Images/client4.png';
import client5 from '../Images/client5.png';
import client6 from '../Images/client6.png';
export default function Testimonials() {
  return (
    <>
    <div className='Testi'>
        <div className="Testi-11">
         <p>OUR CLIENTS</p>
         <h1>What are our clients<br/>
              saying about us
         </h1>
        </div>
       <div className="grade">
          <div className="good">
            <div className='good-1'>
              <img src={client1} alt="" />
              <div className='child'>
              <h3>Dana Gilmore</h3>
              <p>Excellent team!</p>
              </div>
            </div>
            <p>The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
          </div>
          <div className="good">
          <div className='good-1'>
              <img src={client2} alt="" />
              <div className='child'>
              <h3>Ana Anderson</h3>
              <p>Very good work</p>
              </div>
            </div>
            <p>The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
          </div>
          <div className="good">
          <div className='good-1'>
              <img src={client3} alt="" />
              <div className='child'>
              <h3>Albert adame</h3>
              <p>Very well</p>
              </div>
            </div>
            <p>The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
          </div>
          <div className="good">
          <div className='good-1'>
              <img src={client4} alt="" />
              <div className='child'>
              <h3>Dana Gilmore</h3>
              <p>Excellent team!</p>
              </div>
            </div>
            <p>The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
          </div>
          <div className="good">
          <div className='good-1'>
              <img src={client5} alt="" />
              <div className='child'>
              <h3>Alex gilmore</h3>
              <p>Excellent team!</p>
              </div>
            </div>
            <p>The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
          </div>
          <div className="good">
          <div className='good-1'>
              <img src={client6} alt="" />
              <div className='child'>
              <h3>Sivay Ashbi</h3>
              <p>Excellent team!</p>
              </div>
            </div>
            <p>The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
          </div>
       </div>
    </div>
    </>
  )
}

import React from 'react'
import '../Styling/Services.css';
import icons8sell from '../Images/icons8sell.png';
import icons8home from '../Images/icons8home.png';
import icons8services from '../Images/icons8services.png';
import icons8search from '../Images/icons8search.png';
import icons8_evaluation from '../Images/icons8_evaluation.png';
import icons8_slrbackside from '../Images/icons8_slrbackside.png';
export default function Services() {
  return (
    <>
    <div className='Services'>
      <div className="Service">
         <p>OUR SERVICES</p>
         <h1>Top real estate<br/>
         services available
         </h1>
      </div>

      <div className="girds">
            <div className="clg-1">
                <div className="clg-2">
                     <img src={icons8sell} alt="" />
                </div>
                <h2>Sell your home</h2>
                <p>We sell your home at the best market price</p>
                <a href='n'>READ MORE</a>
            </div>

            <div className="clg-1">
                <div className="clg-2">
                     <img src={icons8home} alt="" />
                </div>
                <h2>Home loans</h2>
                <p>We offer you free consultancy to get a loan</p>
                <a href='n'>READ MORE</a>
            </div>
            <div className="clg-1">
                <div className="clg-2">
                     <img src={icons8services} alt="" />
                </div>
                <h2>Legal services</h2>
                <p>Expert legal help for all related property items</p>
                <a href='n'>READ MORE</a>
            </div>
            <div className="clg-1">
                <div className="clg-2">
                     <img src={icons8search} alt="" />
                </div>
                <h2>Home inspection</h2>
                <p>We make sure you get what you were promised</p>
                <a href='n'>READ MORE</a>
            </div>
            <div className="clg-1">
                <div className="clg-2">
                     <img src={icons8_evaluation} alt="" />
                </div>
                <h2>Evaluation</h2>
                <p>We offer you free evaluation to get a mortgage loan</p>
                <a href='n'>READ MORE</a>
            </div>
            <div className="clg-1">
                <div className="clg-2">
                     <img src={icons8_slrbackside} alt="" />
                </div>
                <h2>Photoshoot</h2>
                <p>We prepare your home visual presentation</p>
                <a href='n'>READ MORE</a>
            </div>
      </div>
    </div>
    </>
  )
}

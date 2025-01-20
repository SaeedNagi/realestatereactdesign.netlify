import React from "react";
import "../Styling/Navbar.css";
import logo_reals from "../Images/logo_reals.png";
import icons8phone from "../Images/icons8phone.png";
import icons8maleuser from "../Images/icons8maleuser.png";
export default function Navbar({ refs }) {
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="body-container">
        <div className="container">
          <div className="logo">
            <div className="navbar-first">
              <img src={logo_reals} alt="" />
              <li>HOME</li>
              <li onClick={() => handleScroll(refs.about)}>ABOUT</li>
              <li onClick={() => handleScroll(refs.properties)}>PROPERTIES</li>
              <li onClick={() => handleScroll(refs.services)}>SERVICES</li>
              <li onClick={() => handleScroll(refs.testimonials)}>
                TESTIMONIALS
              </li>
              <li onClick={() => handleScroll(refs.contact)}>CONTACT</li>
            </div>
            <div className="contact-bar">
              <img src={icons8phone} alt="" />
              <p>888-908-9102</p>
              <img src={icons8maleuser} alt="" />
            </div>
          </div>
        </div>

        <div className="home-side">
          <div className="header">
            <h1>Find your next Home in Las Vegas</h1>
            <p>
              Through our proprietary platform, WpResidence is changing how
              agents and clients navigate the process of finding or selling a
              home.
            </p>
          </div>
          <div className="submit translate">
            <div className="loc">
              <h3>LOCATION</h3>
              <input
                type="text"
                id="text"
                placeholder="Enter an address, state, city"
              />
            </div>
            <div className="typ">
              <h3>TYPE</h3>
              <select name="" id="">
                <option value disabled>
                  Select type
                </option>
                <option value="option1">Rentals</option>
                <option value="option2">Sales</option>
                <option value="option3">Commercial</option>
              </select>
            </div>
            <div className="catsg">
              <h3>CATEGORY</h3>
              <select name="" id="">
                <option value disabled>
                  Property Category
                </option>
                <option value="option1">Apartment</option>
                <option value="option2">Doplux</option>
                <option value="option3">Codous</option>
                <option value="option4">Houses</option>
                <option value="option5">Villas</option>
              </select>
            </div>
            <div className="btn">
              <button type="submit">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

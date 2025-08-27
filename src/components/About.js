import React from "react";
import "../Styling/About.css";
import about_pic from "../Images/about_pic.jpg";
import area_1 from "../Images/area_1.jpg";
import area_2 from "../Images/area_2.jpg";
import area_3 from "../Images/area_3.jpg";
export default function About() {
  return (
    <>
    <div className="hello">
      <div className="about-cent">
        <img src={about_pic} alt="" />
        <div className="para">
          <h4>WHO WE ARE</h4>
          <h1>We help clients buy and sell houses since 1989</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam
            eaque inventore voluptatum rem consectetur quae magni optio quis
            incidunt?
          </p>
          <button type="submit">VIEW MORE</button>
        </div>
      </div>

      <div className="abtus">
        <div className="section">
          <div className="pop">
            <p>POPULAR AREAS</p>
            <h1>
              Explore most
              popular areas
            </h1>
          </div>
          <div className="area001">
            <img src={area_1} alt="" />
            <img src={area_2} alt="" />
            <img src={area_3} alt="" />
          </div>
        </div>
        <div className="pop1">
        <div className="pop11">
          <h1>5K</h1>
          <p>
            ACTIVE
            <br />
            LISTINGS
          </p>
        </div>
        <div className="pop11">
          <h1>9K</h1>
          <p>
            SOLID
            <br />
            LISTINGS
          </p>
          </div>
          <div className="pop11">
          <h1>6K</h1>
          <p>
            CLIENTS
            <br />
            WE'VE SERVED
          </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

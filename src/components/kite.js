import Robert from "../img/Robert.jpeg";
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



function Kite() {
    return (
        <div className="first">
          <h4>Robert Warner</h4>
          <div className="w3-card-4">
          <img src={Robert} alt="logo" class="photo"/>
          <p>Coming from FLorida is our top instructior for 2022. Now lives and breathes Hawaii. The surfer-cinematographer who directed "That First Glide" was one of the first surfers to take on Jaws and ride waves using ram air kites. </p>
              <div className="w3-container w3-center">
                <hr/>
                <button className="btn">Book Lesson</button>
              </div>
              <div className="social-links">
              <a href="https://www.facebook.com">
            <FaFacebook size={24} className="facebook" />
              </a>
              <a href="https://www.instagram.com/">
            <FaInstagram size={24} className="insta" />
              </a>
              <a href="https://www.linkedin.com/">
            <FaLinkedinIn size={24} cclassName="linkedin" />
              </a>
              <a href="https://www.twitter.com/">
            <FaTwitter size={24} className="twitter" />
              </a>
              </div>
          </div>
        </div>
      );
}
  
  export default Kite;
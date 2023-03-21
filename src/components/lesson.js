import z3 from "../img/z3.jpeg";
import React from 'react';

import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Lesson() {
    return (
        <div className="first">
          <h4>Mark Filed</h4>
          <div className="w3-card-4">
          <img src={z3} alt="logo" class="photo"/>
              <div className="w3-container w3-center">
              <p>Mark achieved the world record for the highest kite jump, measured by WOO Sports on February 19, 2017 in Cape Town, South Africa, during a session with 40-knot winds. Jacobsen's jump reached 28.6 meters high.</p>
              <hr/>
              <button type="button" className="btn">Book Lesson</button>

              </div>
              <div className="social-links">
              <a href="https://www.facebook.com">
            <FaFacebook size={24}  className="facebook"/>
              </a>
              <a href="https://www.instagram.com/">
            <FaInstagram size={24}  className="insta"/>
              </a>
              <a href="https://www.linkedin.com/">
            <FaLinkedinIn size={24} className="linkedin"/>
              </a>
              <a href="https://www.twitter.com/">
            <FaTwitter size={24}  className="twitter"/>
              </a>
              </div>
              
          </div>
        </div>
        
      );
      
}
  
  export default Lesson;
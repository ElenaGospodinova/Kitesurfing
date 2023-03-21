import React from 'react';
import wave from "../img/wave.jpeg";

function Footer() {
    return (
        <div className="footer-container">
          <div className="last-footer-links">
            <img src={wave} alt="wave" className="img"/> 
            <h3 className="moto">"Let the wind carry you to new heights - Go Kitesurfing!"</h3>
              <ul className="linksf">
                  <li><a href="#" className="flinks">Home</a></li>
                  <li><a href="#" className="flinks">About</a></li>
                  <li><a href="#" className="flinks">Contact</a></li>
                  <li><a href="#" className="flinks">Shop Gears</a></li>
                  <li><a href="#" className="flinks" >Gallery</a></li>
              </ul>     
          </div>
        </div> 
      );
      
}


export default Footer;
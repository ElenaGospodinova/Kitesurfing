import kite from "../img/kite.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Trainer() {
    return (
        <div className="first">
        <h4>Minika Fererra</h4>
        <div className="w3-card-4">
        <img src={kite} alt="logo" class="photo"/>
        <p>Proffesional Kitesurfer born in Bulgaria with 7 years experiance. Now you can find her in Zanzibar where she build her tropical life.</p>
            <div className="w3-container w3-center">
             <hr/>
              <button className="btn">Book Lesson</button>
            </div>
            <div className="social-links">
            <a href="https://www.facebook.com">
            <FaFacebook size={24} className="facebook" />
              </a>
              <a href="https://www.instagram.com/">
            <FaInstagram size={24}  className="insta"/>
              </a>
              <a href="https://www.linkedin.com/">
            <FaLinkedinIn size={24}  className="linkedin"/>
              </a>
              <a href="https://www.twitter.com/">
            <FaTwitter size={24}  className="twitter"/>
              </a>
            </div>
        </div>
      </div>
      );
}
  
  export default Trainer;
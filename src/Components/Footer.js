

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import track from '../Assets/track.mp4'
// import {FaFacebook} from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';




function Footer() {
  return (
      <div class="end1">
      <div className="footer">
      <div class="c0">
      <h1>RACELINE</h1>
      <br/>
      <p  class="icons">
        The ultimate destination for <br />
        racing enthusiasts and <br/>
        professionals
      </p>
        
          <div style={{ fontSize: "24px", display: "flex", gap: "20px" }}>

          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={24} color="white" />
        </a>
         {/* <p>FaFacebook</p> */}
        
          <div class="twit">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
   {/* <FaTwitter size={24} color="white" /> */}
   <FaXTwitter size={24} color="white" />

</a>

          </div>
        
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#E1306C" }}>
           <FaInstagram size={24} color="white" />
        </a>
        
        
       </div>
      </div>
      <div class="c1">
        <h3>Quick Link</h3>
        <br/>
        <ug class="ug1">
          <li>Events</li>
          <li>Community</li>
          <li>Garage</li>
          <li>About</li>
        </ug>
      </div>
      <div class="c2">
        <h3>Support</h3>
        <br/>
        <ug class="ug2">
          <li>Helper Center</li>
          <li>Safety</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ug>
      </div>
      <div class="c3">
        <h3>Newsletter</h3>
        <br/>
        <p class ="para">Stay updated with the latest racing<br/>news and evemnts.</p>
        <input  class="inp" type="email" placeholder="Your email" /> <button class="butt">join</button>
      </div>
     </div>
     <center><p style={{ marginTop: "10px" }}>© 2025 ES EthicSecure. All rights reserved.</p></center>
     </div>  
    
  );
}

export default Footer;

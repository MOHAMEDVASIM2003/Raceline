import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


function Plans() {
  return (
    <div>
      <center><h1 class="plan">Membership Plans</h1></center>
      <div class="pro">
        <div class="mp1">
        <p class="pro5">Pro Racer</p>
         {/* <h1>$19.99</h1> */}
         
          <div class="pros"><span class="amount">$19.99</span><span class="per">/month</span></div>
         
        <ul class="pro1">
          <li> <FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} /> Priority Registration</li>
          <li> <FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} /> Advanced Stats</li>
          <li> <FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} /> Pro Badge</li>
          <li> <FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} /> Live Timing</li>
        </ul>
        <button class="btn1">CHOOSE PLAN</button>
      </div>
      <div class="mp2">
        <p class="pro5">Pro Racer</p>
        {/* <h1>$19.99</h1> */}
        <div class="pros"><span class="amount">$19.99</span><span class="per">/month</span></div>
        <ul class="pro1">
          <li> <FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} /> Priority Registration</li>
          <li> <FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} /> Advanced Stats</li>
          <li> <FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} /> Pro Badge</li>
          <li> <FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} /> Live Timing</li>
        </ul>
        <button class="btn2">CHOOSE PLAN</button>
      </div>
      <div class="mp3">
        <p class="pro5">Pro Racer</p>
        {/* <h1>$19.99</h1> */}
        <div class="pros"><span class="amount">$19.99</span><span class="per">/month</span></div>
        <ul class="pro1">
          <li> <FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} />  Priority Registration</li>
          <li> <FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} />  Advanced Stats</li>
          <li> <FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} />  Pro Badge</li>
          <li> <FontAwesomeIcon icon={faCheck} style={{ color: 'red' }} />  Live Timing</li>
        </ul>
        <button class="btn3">CHOOSE PLAN</button>
      </div>
      </div>
    </div>
  )
}

export default Plans
import React from 'react'
import './Style.css'
import img1 from '../Assets/img1.jpg'
function JoinNow() {
  return (
    <div class="overall">
      <div class="jimg">
        <img src={img1} style={{width:'800px', height:'700px'}}/>
      </div>
      <div class="jn">
        <h2 class="f1">Join Our <spam class="red">Racing</spam><br/> Community</h2>
        <p class="f2">Connect with fellow races<br />share your builds,and stay<br />updated on the latest events.<br />our community is build by<br />racers,for racers.</p>
        <button class="jbtn">JOIN NOW</button>
      </div>

    </div>


  )
}

export default JoinNow
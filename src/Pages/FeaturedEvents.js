import React from "react";
import Bike1 from "../Assets/Bike-1.jpg";
import Bike2 from "../Assets/Bike-2.jpg";
import Bike3 from "../Assets/Bike-3.jpg";
import "./Style.css";
function FeaturedEvents() {
  return (
    <div class="feature">
    <div class="event">Featured Events</div>

<div class="container">
  <div class="box-1">
    <div class="image-wrapper">
      <img src={Bike1} alt="Event Image"/>
      <div class="badge-top badge-featured">FEATURED</div>
      <div class="badge-top badge-circuit">CIRCUIT</div>
    </div>
    <div class="event-content">
      <h3 class="event-title">Summer Sprint Series</h3>
      <p class="event-date">Mar 15, 2024 &nbsp;&nbsp; Laguna Seca</p>
      <button class="box-1-btn">REGISTER NOW</button>
    </div>
  </div>
  <div class="box-2">
    <div class="image-wrapper">
      <img src={Bike2} alt="Event Image"/>
      <div class="badge-top badge-featured">FEATURED</div>
      <div class="badge-top badge-circuit">CIRCUIT</div>
    </div>
    <div class="event-content">
      <h3 class="event-title">Summer Sprint Series</h3>
      <p class="event-date">Mar 15, 2024 &nbsp;&nbsp; Laguna Seca</p>
      <button class="box-2-btn">REGISTER NOW</button>
    </div>
  </div>

  <div class="box-3">
    <div class="image-wrapper">
      <img src={Bike3} alt="Event Image"/>
      <div class="badge-top badge-featured">FEATURED</div>
      <div class="badge-top badge-circuit">CIRCUIT</div>
    </div>
    <div class="event-content">
      <h3 class="event-title">Summer Sprint Series</h3>
      <p class="event-date">Mar 15, 2024 &nbsp;&nbsp; Laguna Seca</p>
      <button class="box-3-btn">REGISTER NOW</button>
    </div>
  </div>
</div>
      <div class="btn">
        <center><button class="view-btn">VIEW ALL PRODUCT</button></center>
      </div>
</div>
  );
}

export default FeaturedEvents;



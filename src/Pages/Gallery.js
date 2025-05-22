import React from "react";
import Car1 from "../Assets/Car1.jpg";
import Car2 from "../Assets/Car2.jpg";
import Car3 from "../Assets/Car3.jpg";
// import "../App.css";
import "./Style.css";
function Gallery() {
  return (
    <div class="pic-box">
      <div class="pic1">
        <img src={Car1} alt="car1" />
      </div>
      <div class="pic-box2">
        <div class="pic2">
          <img src={Car2} alt="car2" />
        </div>
        <div class="pic3">
          <img src={Car3} alt="car3" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;

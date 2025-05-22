import React from "react";
import p1 from "../Assets/p1.jpg";
import p2 from "../Assets/p2.jpg";
import p3 from "../Assets/p3.jpg";
import "./Style.css";
function Community() {
  return (
    <div className="gear">
      <div class="communitytxt">
      <h1>Community Spotlight</h1>
      </div>
      <div class="card-container">
        <div class="card">
          <img src={p1} alt="Mike Drift" />
          <h3>Mike Drift</h3>
          <div class="badge">PRO</div>
          <div class="wins">8 Race Wins</div>
        </div>

        <div class="card">
          <img src={p2} alt="Mike Drift" />
          <h3>Mike Drift</h3>
          <div class="badge">PRO</div>
          <div class="wins">8 Race Wins</div>
        </div>

        <div class="card">
          <img src={p3} alt="Mike Drift" />
          <h3>Mike Drift</h3>
          <div class="badge">PRO</div>
          <div class="wins">8 Race Wins</div>
        </div>
      </div>

      <center>
        {" "}
        <button class="join-btn">Join the Community</button>{" "}
      </center>
    </div>
  );
}

export default Community;

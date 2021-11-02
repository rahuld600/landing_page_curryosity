import png_small from "./png-small.png";
import photo from "./photo.png";
import React from "react";
import "./App.css";

function App() {
  return (
    <div
      class="
        d-flex
        flex-wrap
        align-items-center
        justify-content-evenly
      "
      style={{
        backgroundColor: "#e3e5e0",
        height: "100vh",
        width: "100%",
        flex: 1,
      }}
    >
      <div class="logontext-container d-flex flex-column align-items-center">
        <img src={png_small} alt="" />
        <div
          class="text-center"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <h1 class="heading">The Adventure Begins Soon..</h1>
          <p class="sub-heading">watch out this space for more</p>
        </div>
      </div>
      <div class="cloveimg-container">
        <img className="clove" src={photo} alt="" />
      </div>
    </div>
  );
}

export default App;

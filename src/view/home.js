import React from "react";
import Navbar from "../view/nav";

function HomeImage() {
  return (
    <img className="home-image" src={require("../homeIMG.png")} alt="Home" />
  );
}

function TextBox() {
  return (
    <div className="text-box">
      <h1>Welcome to Vendia Care</h1>
      <p>
        At Vendia Care, we strive to provide the highest quality healthcare
        services to our patients. Our team of experienced doctors and healthcare
        professionals are committed to improving the health and well-being of
        our patients.
      </p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Navbar />
      <div className="backgroundHome" style={{ backgroundColor: "#e8dfdf" }}>
        <div className="container">
          <HomeImage />
          <TextBox />
        </div>
      </div>
    </div>
  );
}

export default Home;

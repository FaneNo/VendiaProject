import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "../view/nav";
import Signout from "./logout";


function HomeImage() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        console.log("user is logged out");
      }
    });
  }, []);

  return <img className="home-image" src={require("../homeIMG.png")} alt="Home" />;
}

// function TextBox() {
//   return (
//     <div className="text-box">
//       <h1>Welcome to Vendia Care</h1>
//       <p>
//         At Vendia Care, we strive to provide the highest quality healthcare services to our patients. Our team of experienced doctors and healthcare professionals are committed to improving the health and well-being of our patients.
//       </p>
//       <div className="cta-container">
//         <Link to="/schedule-appointment" className="cta-btn">
//           Schedule an Appointment
//         </Link>
//       </div>
//     </div>
//   );
// }

function Testimonials() {
  return (
    <div className="testimonials-container">
      <h2>What Our Patients Are Saying</h2>
      <div className="testimonial">
        <p>
          "I've been a patient at Vendia Care for several years and have always had a positive experience. The staff is friendly and knowledgeable, and the doctors are top-notch."
        </p>
        <p className="testimonial-author">- John Smith</p>
      </div>
      <div className="testimonial">
        <p>
          "I was impressed with the level of care I received at Vendia Care. The doctors took the time to listen to my concerns and provide personalized treatment."
        </p>
        <p className="testimonial-author">- Jane Doe</p>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="social-links-container">
      <h2>Connect with Us</h2>
      <ul className="social-links-list">
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

// function TextBox() {
//   return (
//     <div className="text-box">
//       <h1>Welcome to Vendia Care</h1>
//       <p>
//         At Vendia Care, we strive to provide the highest quality healthcare
//         services to our patients. Our team of experienced doctors and healthcare
//         professionals are committed to improving the health and well-being of
//         our patients.
//       </p>
//     </div>
//   );
// }

function Home() {
  return (
    <div>
      {/* #110015 */}
      <Navbar />
      <div className="backgroundHome">
        <div className="container">
        {/* <TextBox /> */}
          <HomeImage />
          <Testimonials />
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}

export default Home;

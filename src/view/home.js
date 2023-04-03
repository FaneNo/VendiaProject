import React from "react";
import Navbar from "../view/nav";
import { useState, useEffect } from "react";
import { auth } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import Signout from "./logout";
import { Navigate } from "react-router-dom";

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

  return (
    <>
      
      <section className="container-fluid px-0">
        <div className="row align-items-center contentH">
          <div className="col-lg-6">
            <div
              id="headingGroup"
              className="text-white text-center d-none d-lg-block mt-5 "
            >
              <h1 className="">Vendia HealthCare</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src={require("../DnA.gif")} alt="" />
          </div>
        </div>
      </section>
      <section className="container-fluid px-0">
        <div className="row align-items-center contentH ">
          <div className="col-md-6 order-2 order-md-1">
            <img src={require("../Bio.gif")} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 text-center order-1 order-md-2">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2>About</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, iste molestiae beatae, maiores deserunt in voluptatibus
                  aspernatur architecto excepturi delectus soluta? Ipsa,
                  deleniti dolorem hic consequatur repellat eveniet quidem
                  voluptate necessitatibus dolorum delectus minus vitae, ut,
                  veritatis sint ipsum magnam autem nam ex deserunt debitis
                  eaque ratione! Nobis, quidem assumenda.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center contentH">
          <div className="col-md-6 text-center">
            <div className="row justify-content-center">
              <div className="col-10 col-lg-8 blurb mb-5 mb-md-0">
                <h2>About</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, iste molestiae beatae, maiores deserunt in voluptatibus
                  aspernatur architecto excepturi delectus soluta? Ipsa,
                  deleniti dolorem hic consequatur repellat eveniet quidem
                  voluptate necessitatibus dolorum delectus minus vitae, ut,
                  veritatis sint ipsum magnam autem nam ex deserunt debitis
                  eaque ratione! Nobis, quidem assumenda.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={require("../DNA2.gif")} alt="" className="img-fluid " />
          </div>
        </div>
      </section>
    </>
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
      <div className="backgroundHome" style={{ backgroundColor: "white" }}>
        <div className="container">
          <HomeImage />
          {/* <TextBox /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;

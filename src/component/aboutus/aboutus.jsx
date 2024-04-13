import React from "react";
import "./aboutus.css";


const AboutUs = () => {
  return (
    <div>
      <div className="text-secondary p-2 ">
        
          <div className="titleabout fw-bold text-center">
            <h2>
              About <b>Pen And Paper</b>
            </h2>
          </div>
          </div>
            <div className="about mx-auto">
              <div className="about-item">
                <h4 className="mx-3">Pen And Paper</h4>
                <p className="mx-auto pt-5">pen and paper app is shopping app built mainly with br React JS and other technologies </p>
              </div>
              <div className="about-item">
                <h4 className="mx-3">Technologies used</h4>
                <ul className="mx-4">
                  <li>React JS</li>
                  <li>JSON</li>
                  <li>CSS</li>
                  <li>Bootstrap 5</li>
                </ul>
              </div>
              <div className="about-item">
                <h4 className="mx-3">Follow me on</h4>
                <section className="mx-auto" >
                  <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.linkedin.com/in/mwesigwa-moses-byansi-7276972a8/" role="button" data-mdb-ripple-color="dark"><i className="fab fa-linkedin" /></a>
                  <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/byaxy256" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github" /></a>
                </section>
              </div>

              <div className="about-item">
                <h4 className="mx-3">My portfolio</h4>
              </div>
            </div>
        </div>


  
  );
}


export default AboutUs;

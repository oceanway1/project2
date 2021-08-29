import React from "react";
import "../components/views/service.css";
import Contact from './ContactForm';
import Footer from "./Footer";
// import image from "../components/views/contactpage.png"
import image from "../components/views/homepic.png"

export default function Service(props) {
  return (
    <div>
      <div className="hourly_rate">
        <h4>Hourly Rate</h4>
        <h5>Available now</h5>
        <div className="hourly__text">
          <div className='div_text'>
            {/* <h5>$16</h5> */}
            <p>Only Premiere Pro</p>
          </div>
          <div className='div_text'>
            {/* <h5>$18</h5> */}
            <p>Film + Premiere Pro</p>
          </div>
          <div className='div_text'>
            {/* <h5>$20</h5> */}
            <p>Film + Premiere Pro + After Effects</p>
          </div>
        </div>
      </div>
      <br>
      </br>
      <Contact />
      <Footer />
    </div>
  );
}
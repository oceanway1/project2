import React from "react";
import "../components/views/service.css";
import Contact from './ContactForm';
import Footer from "./Footer";

export default function Service(props) {
  return (
    <div>
      <Contact />
      <br>
      </br>

      <div className="hourly_rate">
        <h4>Hourly Rate</h4>
        <h5>Available now</h5>
        <div className="hourly__text">
          <div className='div_text'>
            <h5>$16</h5>
            <p>Ena Style</p>
            <p>Only Premiere Pro</p>
          </div>
          <div className='div_text'>
            <h5>$18</h5>
            <p>Dio Style</p>
            <p>Film + Premiere Pro</p>
          </div>
          <div className='div_text'>
            <h5>$20</h5>
            <p>Tria Style</p>
            <p>Film + Premiere Pro + After Effects</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import React, { Fragment } from "react";
import "../components/views/service.css";

export default function Service(props) {
  return (
    <div>
      <p class='text-white'>Let's talk</p>
      <br>
      </br>
      <div className="hourly_rate">
        <h4>Hourly Rate</h4>
        <h4>Avaiable now</h4>
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
    </div>
  );
}
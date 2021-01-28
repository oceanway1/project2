import React, { Fragment } from "react";
import "../components/views/service.css";

export default function Service(props) {
  return (
    <div className="main">
      <div className="primary">
        <div className="primary_text">
          <div>
            <h4>
              <span>
                Hire an Editor
        <br />
                &
                <br />
                Partner
        </span>
            </h4>
          </div>
        </div>
      </div>
      <div className="secondary">
        <div className="secondary__text">
          <h3>Video Editing</h3>
          <p>Productions, Presentations, News Report, Event Review, ect.</p>
          <p>As a Video Editor, Catherine is capable of shooting video, recording audio, and putting together a sequence of shots to create the video you want. Learning from British Columbia Institute of Technology, her skill set was created for the purpose of common projects with the knowledge of an industry standard work flow.</p><br />
        </div>
        <div className="secondary__image">
          <img src="https://www.maxpixels.net/static/photo/1x/Forest-Fungus-Nature-Small-Mushroom-Autumn-3779939.jpg" alt="featuredImage" />
        </div>
      </div>
      <div className="secondary">
        <div className="secondary__text">
          <p>Hello</p><br />
        </div>
        <div className="secondary__image">
          <img src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg" alt="featuredImage" />
        </div>
      </div>
      <br></br>
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
    </div >
  );
}
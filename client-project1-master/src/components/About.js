import React from "react";
import "../components/views/about.css";
import secondImage from "./views/service1.jpg"
import thirdImage from "./views/service4.jpg"
import Footer from "./Footer"

export default function About(props) {
  return (
    <div className="main">
      <div className="primary">
        <div className="primary_text">
          <div>
            <p>
              {/* <span> */}
                Hire an Editor
        <br />
                &
                <br />
                Partner
        {/* </span> */}
            </p>
          </div>
        </div>
      </div>
      <div className="secondary">
        <div className="secondary__text">
          <h2>Video Editing</h2>
          <p>As a Video Editor, Catherine is capable of shooting video, recording audio, and putting together a sequence of shots to create the video you want. Learning from British Columbia Institute of Technology, her skill set was created for the purpose of common projects with the knowledge of an industry standard work flow.</p><br />
        </div>
        <div className="secondary__image">
          <img src={thirdImage} alt="featuredImage" />
        </div>
      </div>
      <div className="secondary">
        <div className="secondary__text">
          <h2>Practice makes Permanent</h2>
          <p>Catherine uses her free time to capture raw footage within Bristish Columbia. From the Okanagan to Vancouver Island, she enjoys capturing moments that can be interpreted in any way. Though she sees this as an opportunity to imrpove her techniques and let others enjoy her content. She also enjoys Video Games, Literature, and Sketching on her free time.</p>
        </div>
        <div className="secondary__image">
          <img src={secondImage} alt="featuredImage" />
        </div>
      </div>
      <Footer />
    </div >
  );
}
import React from "react";
import "../components/views/sutherland.css";
import secondImage from "./views/service1.jpg"
import thirdImage from "./views/sutherland2.jpg"
import Footer from "./Footer"


export default function Sutherland(props) {
  return (
    <div className="main">

      <div className="primary">
        <div className="primary_text">
          <div>
            {/* <p> */}
            {/* <span> */}
            Hire an Editor & Partner
            {/* <br /> */}
            {/* & */}
            {/* <br /> */}
            {/* Partner */}
            {/* </span> */}
            {/* </p> */}
          </div>
        </div>
      </div>
      <div className="secondary">
        <div className="secondary__text">
          <h2>Video Editing</h2>
          <p>Accountable, effective professional who is customer driven with over 7 years of customer
            service experience. Utilizing every opportunity to grow within a company, adopting a natural
            talent working with people. Excellent communication skills, extraordinary patience with
            supporting customer service and displays a natural, trusting environment with each
            interaction. Finds joy in teaching technology and is always happy to answer questions. Highly
            motivated, hungry to learn, and excited to exceed any challenge.
          </p><br />
        </div>
        <div className="secondary__image">
          <img src={thirdImage} alt="featuredImage" />
        </div>
      </div>
      {/* <div className="secondary">
        <div className="secondary__text">
          <h2>Practice makes Permanent</h2>
          <p>Catherine uses her free time to capture raw footage within Bristish Columbia. From the Okanagan to Vancouver Island, she enjoys capturing moments that can be interpreted in any way. Though she sees this as an opportunity to imrpove her techniques and let others enjoy her content. She also enjoys Video Games, Literature, and Sketching on her free time.</p>
        </div>
        <div className="secondary__image">
          <img src={secondImage} alt="featuredImage" />
        </div> */}
      {/* </div> */}
      <Footer />
    </div >

  );
}
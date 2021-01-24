// import React from "react";

// export default function Portfolio(props) {
//   return (
//     <div>
//       <h2>Luke needs help!!!!!!!!</h2>
//     </div>
//   );
// }

import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import VideoComponent from "./VideoComponent";


const data = require("../../src/videoData.json")


export default function Portfolio(props) {
  console.log(data.videourls);
  const allVideoData = data.videourls.map((itemObj, ind) => (
    <VideoComponent
      key={ind}
      {...itemObj}
    />

  ));
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
     
      <div>
        <VideoComponent
          url="https://www.youtube.com/watch?v=ElvytQCWmiI&t=13s"
        />
        <br></br>
        <Carousel responsive={responsive}>
          {allVideoData}
        </Carousel>
      </div>
  
  );

}




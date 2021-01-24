import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import VideoComponent from "./VideoComponent";
import image from "../components/galaxy.jpg"

const data = require("../../src/videoData.json")


export default function Home() {
  return (
    <nmain>
      <img
        src={image}
        alt="NO IMAGEEEEE"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-4xl text-green-100 font-bold cursive leading-none lg: leading-snug home-name">
          Hello. I'm Catherine. Together, we can achieve great things!
        </h1>
      </section>
    </nmain>
  )
  // console.log(data.videourls);
  // const allVideoData = data.videourls.map((itemObj, ind) => (
  //   <VideoComponent
  //     key={ind}
  //     {...itemObj}
  //   />

  // ));
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };
  // return (

  //     <div>
  //       <VideoComponent
  //         url="https://www.youtube.com/watch?v=ElvytQCWmiI&t=13s"
  //       />
  //       <br></br>
  //       <Carousel responsive={responsive}>
  //         {allVideoData}
  //       </Carousel>
  //     </div>

  // );

}


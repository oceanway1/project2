import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import VideoComponent from "./VideoComponent";
import image from "../components/views/nat.jpg"
import Footer from './Footer'

const data = require("../../src/videoData.json")


export default function Home() {
  return (
    <nmain>
      <img
        src={image}
        alt="NO IMAGEEEEE"
        className="absolute object-cover w-full h-full"
      />
      <section className="placeholder-gray-400 relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className=" text-sm text-white font bold cursive leading-none lg: leading-snug home-name">
          Capturing Greatness.
        </h1>
      </section>
      <Footer />
    </nmain>
  )
}
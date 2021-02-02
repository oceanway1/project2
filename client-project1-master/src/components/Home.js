import React from "react";
import 'react-multi-carousel/lib/styles.css';
import image from "../components/views/nat.jpg"
import Footer from './Footer'

export default function Home() {
  return (
    <main>
      <img  class="w-16 md:w-32 lg:w-48"
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
    </main>
  )
}
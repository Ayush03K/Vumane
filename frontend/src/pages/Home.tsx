// import React from 'react'

import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import Glow from "../components/glow";
import Headers from "../components/Headers";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <div className="bg-primary">
        <Headers/>
        <Hero/>
        <Blog/>
        <About/>
        <Contact/>
        <Footer/>
        {/* <Glow /> */}
      </div>
    </div>
  )
}

import React from "react";
import Layouts from "../components/Layouts";
import Hero from '../components/Hero'
import About from '../components/About'

function index() {
  return (
    <Layouts>
      <Hero />
      <About />
    </Layouts>
  );
}

export default index;

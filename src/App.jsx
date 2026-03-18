import { useState } from 'react'
import './App.css'
import Nav from "./components/layouts/Nav";
import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Footer from "./components/layouts/footer";


function App() {

  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App

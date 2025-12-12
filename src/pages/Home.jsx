import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
    </div>
  )
}

export default Home
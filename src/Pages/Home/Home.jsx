import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Hero from './Hero'
import About from './About'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/>
    </>
  )
}

export default Home
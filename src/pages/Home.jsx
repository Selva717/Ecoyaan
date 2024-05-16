import React from 'react'
import { Hero } from '../components/Hero'
import HeroContent from '../components/HeroContent'
import Footer from '../components/footer'

export const Home = () => {
  return (
    <div className=''>
        <Hero/>
        <HeroContent/>
        <Footer/>
    </div>
  )
}

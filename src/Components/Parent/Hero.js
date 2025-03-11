import React from 'react'
import Data from '../../data.json'
import ChildHero from '../Child/Hero'

const Hero = () => {
    const hero = Data.filter((item) => item.id === 2)
  return (
    <section className='hero-section'>
      <ChildHero data = {hero}/>
    </section>
  )
}

export default Hero

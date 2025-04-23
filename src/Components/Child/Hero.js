import React from 'react'
import bgImage from '../../Assets/hero.png'

const Hero = (props) => {
    const data = props.data;

  return (
    <div className='hero-content'>
      {data.map((getData) => (
        <>
            <h1 className='hero-title'>{getData.title}</h1>
            <p className='hero-desc'>{getData.desc}</p>
          
        </>
      ))}
    </div>
  )
}

export default Hero

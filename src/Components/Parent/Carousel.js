import React from 'react'
import CarouselComp from '../Child/CarouselComp';
import Data from '../../data.json'

const Carousel = () => {
    const carousel = Data.find((item) => item.id === 6)?.carousel || [];
  return (
    <section className='carousel-section'>
        <CarouselComp data = {carousel}/>
    </section>
  )
}

export default Carousel

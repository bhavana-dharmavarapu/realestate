import React, { useState } from 'react'

const CarouselComp = (props) => {
    const data = props.data;

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1)% data.length);  
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    }

  return (
    <div className='carousel'>
        <button className='prev' onClick = {prevSlide}> ❮ </button>

        <div className = 'carousel-content'>
        {data.map((getData, index) => (
            <div className = {`slide ${index === currentIndex ? "active" : ""}`}> 
            <img src = {getData.image} className='carousel-img'/>
            <div className = "titles content-overlay">
            <h4>{getData.title}</h4>
            <p>{getData.description}</p> </div>

            </div>
        ))}
        </div>
        <button className='next' onClick = {nextSlide}> ❯ </button>
    </div>
  )
}

export default CarouselComp

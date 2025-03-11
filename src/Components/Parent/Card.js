import React from 'react'
import CardComp from '../Child/Cardcomp';
import Data from '../../data.json';

const Card = () => {
    const card = Data.find((item) => item.id === 5)?.card || [];

  return (
    <section className='card-section' id = "features"> 
        <CardComp data = {card}/>
    </section>
  )
}

export default Card

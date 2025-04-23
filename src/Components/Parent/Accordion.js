import React from 'react'
import Data from '../../data.json';
import AccordionComp from '../Child/AccordionComp';

const Accordion = () => {
    const accordion = Data.find((item) => item.id === 7) ?.accordion || [];

  return (
    <section className ='accordion-section' id="about-us">
        <AccordionComp data = {accordion}/>
    </section>
  )
}

export default Accordion

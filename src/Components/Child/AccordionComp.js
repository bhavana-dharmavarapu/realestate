import React from 'react'
import { useState } from 'react';
import Titles from './Titles'
import Data from '../../data.json';
import AccordionImage from '../../Assets/hero.png';

/* THIS ACCORDION IS FOR OPENING ALL ACCORDION ITEMS ONCE AT A TIME
const AccordionComp = (props) => {
    const data = props.data;
    const Title = Data.filter((item) => item.id === 7);


    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <Titles data = {Title}/>
        <div className = 'accordion'><img src = {AccordionImage} className='accordion-img' />
        <div className = 'accordion-container'>
        {data.map((getData) => (
            <div className = 'accordion-item'>
            <button className='accordion-header' onClick = {() => setIsOpen(!isOpen)}>{getData.title}
            <span>{isOpen ? "▲" : "▼"}</span></button>

            {isOpen && <div className='accordion-content'> {getData.content}</div>}
            </div>
        ))}
        </div>
    </div>
    </div>
  )
}

export default AccordionComp
*/




const AccordionComp = (props) => {
    const data = props.data;
    const Title = Data.filter((item) => item.id === 7);

    const[openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    /* If openIndex is already set to index, set it to null (close the item).
Otherwise, set openIndex to index (open the clicked item).*/


  return (
    <div>
      <Titles data={Title} />
        <div className='accordion'>
            <img src={AccordionImage} className='accordion-img' />
            <div className="accordion-container">
                {data.map((getData, index) => (
                    <div key={index} className='accordion-item'>
                        <button className='accordion-header' onClick={() => toggleAccordion(index)}>
                                {getData.title}
                                <span>{openIndex === index ? "▲" : "▼"}</span>
                            </button>
                            {openIndex === index && <div className='accordion-content'>{getData.content}</div>}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AccordionComp


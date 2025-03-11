import React from 'react'
import Title from './Titles'
import Data from '../../data.json'

const Cardcomp = (props) => {
    const data = props.data

    const title = Data.filter((item) => item.id === 4)

  return (
    <div>
        <Title data = {title}/>
       <div className = 'card'>
        {data.map((getData) => (
            <div className='card-container'>
            <img src = {getData.icon} className='card-icon'/>
            <h3 className='card-heading'>{getData.title}</h3>

            <ul className='card-features'>
            {getData.Features && getData.Features.map((Feature) => (
               <li>{Feature}</li>
               
            ))}
            </ul>
            </div>           
            
        ))}
    </div>
    </div>

  )
}

export default Cardcomp;

import React from 'react'
import Data from '../../data.json';
import Titles from './Titles';


const GridComponent = (props) => {
    const data = props.data;

    const title = Data.filter((item) => item.id === 8);

  return (
    <div>
      <Titles data = {title}/>
      <div className='grid-container'>
        {data.map((getData) => (
            <div className = 'grid-card'>
                <div className="grid-icon">{getData.icon}</div>
                <h3 className="grid-title">{getData.title}</h3>
                <p className="grid-description">{getData.description}</p>
            </div>
        ))}

      </div>
    </div>
  )
}

export default GridComponent

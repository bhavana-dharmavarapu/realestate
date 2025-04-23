import React from 'react'
import Data from '../../data.json'
import GridComp from '../Child/GridComponent';

const Grid = () => {
    const grid = Data.find((item) => item.id === 8) ?.grid || []
  return (
    <section className='grid-section' id = 'specifications'>
        <GridComp data = {grid}/>
    </section>
  )
}

export default Grid

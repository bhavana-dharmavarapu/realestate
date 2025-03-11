import React from 'react'
import Data from '../../data.json'
import ChildHeader from '../Child/Header'

const Header = () => {
    const header = Data.filter((item) => item.id === 1)
    
  return (
    <header>
        <ChildHeader data = {header}/>
        
    </header>
  )
}

export default Header

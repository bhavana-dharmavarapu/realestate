import React from 'react'
import ChildTabs from '../Child/TabComp'
import Data from '../../data.json'


const Tab = () => {
    const tabs = Data.find((item) => item.id === 3)?.tabs || [];
  return (
    <section className='tab-section'>
        <ChildTabs data = {tabs}/>
    </section>
  )
}

export default Tab

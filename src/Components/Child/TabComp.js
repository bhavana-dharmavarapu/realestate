import React from 'react'
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

const TabComp = (props) => {
    const data = props.data

  return (
    <Tabs className = "tab-container">
        <TabList>
            {data.map((getData) => (
                <Tab>{getData.title}</Tab>
            ))}
        </TabList>

        {data.map((getData) => (
            <TabPanel> 
                <div className='panel'>
                <p>{getData.description} </p>
                <img src = {getData.image} alt = {getData.alt} className="tab-image"></img></div>
            </TabPanel>
        ))}
    </Tabs>
  )
}

export default TabComp

import React from 'react'

const Titles = (props) => {
    const data = props.data;
  return (
    <div>
      {data.map((getData) => (
        <div className='titles'>
        <h2>{getData.title}</h2>
        <p>{getData.desc && getData.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default Titles

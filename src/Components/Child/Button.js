import React from 'react'

const Button = (props) => {
  const data = props.data;


  return(
    <>
    {data.map((getData) => (
      <button>{getData.button}</button>
    ))}
    </>
  )
}

export default Button

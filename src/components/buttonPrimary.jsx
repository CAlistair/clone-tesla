import React from 'react'
import "../components/buttonPrimary.css"

function ButtonPrimary({name, type, onClick}) {
  return (
    <button className='buttonPrimary' onClick={onClick} type={type}>
      {name}
    </button>
  )
}

export default ButtonPrimary

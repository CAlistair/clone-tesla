import React from 'react'
import "../components/buttonSecondary.css"

function ButtonSecondary({name, type, onClick}) {
  return (
    <button className='buttonSecondary'>
      {name}
    </button>
  )
}

export default ButtonSecondary

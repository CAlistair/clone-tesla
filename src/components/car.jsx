import React from 'react'
import "./car.css"
import ButtonPrimary from './buttonPrimary'
import ButtonSecondary from './buttonSecondary'

function Car({imgSrc, model, testDrive}) {
  return (
    <div className='car'>
      <div className="car__img">
        <img src={imgSrc} alt={model} />
      </div>
      <h2 className='car__model'>{model}</h2>
      <div className="car__actions">
        <ButtonPrimary name="order"/>
        {testDrive && <ButtonSecondary name="test drive"/>}
      </div>
      <div className="car__info">
        <span>Request a Call</span> to speak with a product 
        specialist, value your trade-in or apply for leasing
      </div>
    </div>
  )
}

export default Car

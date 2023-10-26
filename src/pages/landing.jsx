import React from 'react'
import "../pages/landing.css"

function Landing() {
  return (
    <div className='landing'>
      <div className="landing__info">
        <div className="landing__infoText">
            <h1>Model 3</h1>
            <h4>
                Order Online for <span className='underline'>Touchless Delivery</span>
            </h4>
        </div>
        <div className="landing__actions">
            <button className="landing__btnPrimary">Custom Order</button>
            <button className="landing__btnSecondary">Existing Inventory</button>

        </div>
      </div>
    </div>
  )
}

export default Landing

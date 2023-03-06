import React from 'react'
import comingSoon from "../Images/ComingSoon.jpg"
import "./ComingSoon.css"
function ComingSoon() {
  return (
    <section className="fullContainer">
    <div className="image">
    <img src={comingSoon} alt="Loading" />
    </div>
    <div className="Text">
    <h1>On the way!! For a while check other stuff on our website</h1>
    </div>
    </section>
  )
}

export default ComingSoon
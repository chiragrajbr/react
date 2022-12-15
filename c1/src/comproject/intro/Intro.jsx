import React from 'react'
import "./Intro.css"
import Me from "../../Image/A3.jpg"
const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
        <div className="i-left-wrapper">
            <h4 className='i-intro'>Hello,my self </h4>
            <h1 className='i-name'>Chirag raj br</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">
                        Front-End Web Developer
                    </div>
                </div>
                <p className="i-desc">I design and develop customer required web applications,in all sizes based on front end,and also student required projects.</p>
            </div>
            
        </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div>
      
    </div>
  )
}

export default Intro

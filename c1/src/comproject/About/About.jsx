import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
      <div className="a-card bg"></div>
      <div className="a-card">
        <img src="https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Android-Developer.jpg" 
        alt="" 
        className='a-img'/>
      </div>
      </div>
      <div className="a-right">
        <h2 style={{color:"blue"}}>About me..</h2>
        <h3><p className='a-about'>ok you are here to know about me,glad to see you. 
            basically am a fresher in Front-End Developer,just joined 'Prostack Academy' to learn something and get placed in a IT field.</p></h3>
      </div>
    </div>
  )
}

export default About

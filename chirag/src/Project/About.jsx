import React from 'react'

const About = () => {
  return (
    <div className="container-fluid"  style={{ 
      backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/back_our/20200731/ourmid/pngtree-neon-light-effect-solid-shape-background-png-image_379884.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height:'100%'}}>
      <div className="container ">
        <h2 className='text-white'>ABOUT OUR PROJECT:</h2>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
            <h5 className='text-white'>
              
            
            Everyday a large number of people are coming to all the cities seeking job, higher studies, business, tourism, etc. Initially all the system of the city is unknown to the new comers of the city. They don’t know much about booking hotel, transportation, shopping, etc. But implementation of Smart City Project provides the complete solution package for new comers.
            The use of internet is rapidly growing in all cities around the globe. Nowadays, people prefer searching in internet to enquiring the locals of the city. The smart city web pages can be browsed from anywhere using internet service and all the details of the city can be accessed. One can see all the necessary information about city through this online application.
            </h5>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About

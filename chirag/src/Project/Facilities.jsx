import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Education from './Education'
import Job from './Job'


const Facilities = () => {


  return (
    <div className="container-fluid"  style={{ 
      backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height:'100%'}}>
    <h2> <bold ><pre style={{color:"white"}}>Facilities : we are providing details and booking services of required pages</pre></bold></h2> 
      <div className="container-fluid">
        <div className="row">
            <div className="col-4 mr-auto">
           <h3> <div><Link to="./Education" >Education</Link></div></h3>
            <h3> <div><Link to="./Job" >Jobs</Link></div></h3> 
            </div>
            <div className="col-8">
             <Education />
             <Job />
              
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Facilities

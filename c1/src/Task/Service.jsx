import React from 'react'
const Service = () => {
  return (
    <div>
      
      <div className="container-fluid"  style={{ 
      backgroundImage: `url("https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height:'100%'}}>
        <center>
        <h1 className='text-white'>Available service:</h1>
       <h3> <ul className='text-white'>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-3">
          <h2>course...</h2>
          </div>
        </div>
           <li>front-end</li>
           <li>back-end</li>
          <li>full-stack</li>
        </ul>
        </h3>
        </center>
        <center>
        <div className="container-fluid">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <h2 className='text-white'>facilities...</h2>
            <ul className='text-white'>
              <h3>
              <li>100% placements</li>
              <li>paid-internship</li>
      
              </h3>
            </ul>
          </div>
          
        </div>
        
        </div>
        </center>
         
         
        
          </div>
        </div>
  )
}

export default Service

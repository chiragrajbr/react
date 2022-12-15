import React, { Component } from 'react'
import {Link}from "react-router-dom"

class Home extends Component {
  render() {
    return (
      <div>
        
        <nav className='navbar navbar-expand-lg bg-dark'>
            <div className='navbar-brand text-white'><h2>PROSTACK ACADEMY</h2> </div>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'><Link className='nav-link text-white' to="./Contact">contact</Link></li>
                    <li className='nav-list'><Link  className='nav-link text-white' to="./Loginpage">login</Link></li>
                    <li className='nav-list'><Link  className='nav-link text-white' to="./Service">service</Link></li>

                </ul>
            </div>
            
        </nav>
        
        <div className="container-fluid"  style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/259707/pexels-photo-259707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height:'100%'}}>
        <h1 className='text-success'><center>WELCOME</center></h1>
        <h3 className='text-white'><center>Register for more details</center></h3>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
          <form>
            <div className='form-group'><input type="text" className='form-control' placeholder='name'></input></div>
            <div className='form-group'><input type="text" className='form-control' placeholder='email'></input></div>
          <div className='form-group'><input type="text" className='form-control' placeholder='mobile no'></input></div>
          <button className='btn btn-primary'>submit</button>
          </form>
          </div>
        </div>
      </div>
    
        </div>
        

        
      
    )
  }
}

export default Home

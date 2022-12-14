import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  return (
   <div >
    
      <nav className='navbar navbar-expand-lg bg-dark'>
     <h3 className='navbar text-white'>SMART CITY</h3>
     <img src="https://www.shutterstock.com/image-vector/green-city-logo-vector-260nw-523645630.jpg" alt="" height="80px" />
     <div className='ml-auto'>
     <ul className='navbar-nav'>
    <li className='nav-list'><Link className='nav-link text-success' to="home">Home</Link></li>
    <li className='nav-list'><Link className='nav-link text-success' to="Login">Login</Link></li>
    <li className='nav-list'><Link className='nav-link text-success' to="About">About</Link></li>
    <li className='nav-list'><Link className='nav-link text-success' to="Facilities">Facilities</Link></li>
      </ul>
      </div>
      </nav>
     
     </div>
      

    
  )
}

export default Home

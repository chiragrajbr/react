import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Router2 extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg  bg-primary">
          <div className='navbar-brand text-white'>ROUTER COMPONENT</div>
          <div className='ml-auto'>
            <ul className='navbar-nav'>
         <li> <Link to='/' className='nav-link text-light'>HOME</Link></li>
         <li> <Link to='/' className='nav-link text-light'>SERVICE</Link></li>
         <li> <Link to='/'className='nav-link text-light'>ABOUT</Link></li>
          </ul>

          </div>
        </nav>

        </div>
        
      
    )
  }
}

export default Router2
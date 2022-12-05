//with <a>anchor tag
import React, { Component } from 'react'

class Router1 extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg  bg-primary">
          <div className='navbar-brand text-white'>ROUTER COMPONENT</div>
          <div className='ml-auto'>
            <ul className='navbar-nav'>
         <li> <a href='/' className='nav-link text-light'>HOME</a></li>
         <li> <a href='/' className='nav-link text-light'>SERVICE</a></li>
         <li>  <a href='/'className='nav-link text-light'>ABOUT</a></li>
          </ul>

          </div>
        </nav>

        </div>
        
      
    )
  }
}

export default Router1

import React, { Component } from 'react'
import {Link}from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg bg-dark'>
            <div className='navbar-brand text-white'>ROUTING CONCEPT</div>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list'><Link className='nav-link text-white' to="/home">HOME</Link></li>
                    <li className='nav-list'><Link  className='nav-link text-white' to="/service">SERVICE</Link></li>
                    <li className='nav-list'><Link  className='nav-link text-white' to="/about">ABOUT</Link></li>

                </ul>
            </div>

        </nav>
        
      </div>
    )
  }
}

export default Navbar

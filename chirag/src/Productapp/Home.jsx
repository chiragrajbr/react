import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
//import { Link } from 'react-router-dom'

const Home = () => {
   let [users,setusers]= useState([])
    useEffect(()=>{ 
        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
            setusers(response.data)
        })
        .catch(()=>{})
    },[])

  return (
    <div style={{background:"grey"}}>
        <nav className='navbar bg-dark navbar-expand-lg'>
            <h2  style={{color:"orange"}}>shopsiii.com</h2>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li className='nav-list text-white'> shirts</li>&nbsp;
                    <li className='nav-list text-white'>pants</li>&nbsp;
                    <li className='nav-list text-white'>shoes</li>
                
                </ul>
            </div>
        </nav>
          <div className="container">
            <div className="row mt-4">
                {
                    users.map((user)=>{
                        return<>
                        <div className="col-4">
                            <div className="card mt-5">
                                <div className="card-header  ">
                                <img src={user.image} height="100px" className='mr-5' />
                               
                                
                                
                                </div>
                                <div className="card-body bg-light">
                                 <pre>product:  {user.category}</pre> 
                                 <pre>price:  {user.price}</pre> 
                                 <button className='btn-sm btn-success mr-5 '>buy</button>
                                 <button className='btn-sm btn-danger'>cart</button>
                                 

                                </div>
                            </div>
                        </div>

                        </>
                    })
                }
            </div>
        </div>
        
      
    </div>
  )
}

export default Home

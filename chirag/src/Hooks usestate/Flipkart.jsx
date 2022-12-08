//table using usestate
import React from 'react'
import { useState } from 'react'

const Flipkart = () => {
    let[product,setproduct]=useState({name:"SAMSUNG 22 inch Full HD",image:"https://rukminim1.flixcart.com/image/416/416/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70",price:45000,quantity:1,total:45000})
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <h3>REACT HOOK CONCEPT</h3>
                
                <div className="col-8">
                    
                    <table className='table '>
                   <thead className="table table-primary">
                    <tr>
                        <th>name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                    </tr>
                   </thead>
                   <tbody >
                    <tr>
                        <td>{product.name}</td>
                        <td><img src={product.image}height="100" /></td>
                        <td>{product.price}</td>
                        <td>
                        <button onClick={()=>{
                            setproduct({...product,quantity:product.quantity-1})
                        }}>-</button>
                        {product.quantity}
                        <button onClick={()=>{
                            setproduct({...product,quantity:product.quantity+1})
                        }}>+</button>
                        </td>
                        <td>{product.quantity * product.price}</td>
                        
                    </tr>
                   </tbody>
                    </table>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Flipkart


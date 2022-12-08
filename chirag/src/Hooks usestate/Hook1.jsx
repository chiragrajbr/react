//hooks -used as setstate in functional component
import React from 'react'
import { useState } from 'react'

let Hook1 = () => {
    let [count,setcount]=useState(5)
  return (
    <div>
      <button onClick={()=>{
        setcount(count - 1)
      }}>-</button>

     {count}
      <button onClick={()=>{
        setcount(count + 1)
    
      }}>+</button>
    </div>
  )
}

export default Hook1



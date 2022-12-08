//hook--use effect
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Hook2 = () => {
   let [time,settime] = useState(new Date().toLocaleTimeString())
   useEffect( ()=>{
    setInterval(()=>{
        settime(new Date().toLocaleTimeString())
    },[1000])
    
   })
   
  return (
    <div>
        <center>
        <h1>clock</h1>
        THE TIME IS:{time}
      </center>
    </div>
  )
}

export default Hook2


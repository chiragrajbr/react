//useref in form
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const Hook1 = () => {
    let check=useRef(null)
    let [state,setstate]=useState(false)
    let checked=(event)=>{
        setstate(event.target.checked)
        if(event.target.checked===true){
            check.current.disabled=false
        }
        
        else{
          check.current.disabled=true
        }
      }

  return (
    <div>
        {JSON.stringify(state)}
      <div className="container mt-4">
        <div className="row">
            <div className="col-4"></div>
            <div className="col-5">
            <div className="card">
                <div className="card-hedder bg-success"><h2>login form</h2></div>
                <div className="card-body bg-info">
                <form>
                    <div className='form-group'><input type="text" placeholder='email' name='email' className='form-control '/></div>
                    <div className='form-group'><input type="text" placeholder='password' name='password' className='form-control'/></div>
                    <div className='form-group'><input type="text" placeholder='location' name='loction' className='form-control'/></div>
                    <div className='form-check'><input type="checkbox" className='form-check-input' onClick={checked}/>please accept terms and condition</div>
                    <button className='btn btn-warning' ref={check} disabled>login</button>
                    
                </form>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hook1

//hook usestate with form
import React from 'react'
import { useState } from 'react'

const Hook2form = () => {
  let [form,setform]=useState({email:"",password:""})
 let updatehandler=(event)=>{
    setform({...form,email:event.target.value})
  }
  let passupdate=(event)=>{
    setform({...form,password:event.target.value})
  }

  return (
    <div>
      {JSON.stringify(form)}
      <div className="container mt-4">
      <form action='' >
      <div className='form-group'> <input type="text" placeholder='email' name="email" onChange={updatehandler} className='form-control' /></div> 
        <div className='form-group'><input type="text" placeholder='password' name="password" className='form-control' onChange={passupdate} /></div>
        <button value="submit" className='btn btn-primary'>submit</button>
       </form>
       </div>
      
    </div>
  )
}

export default Hook2form

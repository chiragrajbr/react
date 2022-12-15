//usestate in form
//single handler for multiple tags
import React from 'react'
import { useState } from 'react'

const Form3 = () => {
    let [form,updateform]=useState({email:"",mobileno:"",password:""})
    let update_details=(event)=>{
        updateform({...form,[event.target.name]:event.target.value})
    }

  return (
    <div>
        {JSON.stringify(form)}
        <div className="container">
      <form  onSubmit={(event)=>{
        event.preventDefault()
      }}>
        <div className='form-group'><input type="text" placeholder='email' name='email' className='form-control' onChange={update_details}/></div>
        <div className='form-group'><input type="text" placeholder='mobile number' name='mobileno' className='form-control'  onChange={update_details}/></div>
        <div className='form-group'><input type="text" placeholder='password' name='password' className='form-control'  onChange={update_details} /></div>
        <button className='btn btn-primary'>submit</button>
      </form>
      </div>
    </div>
  )
}

export default Form3

//using usestate in form
import React from 'react'
import { useState } from 'react'

const Formusestate = () => {
   let[form,setform]= useState({email:"",password:""})
  return (
    <div>
        {JSON.stringify(form)}
        <div className="container">
        <form className='form-group mt-4'>
        <div className='form-group'><input type="text" name='email' placeholder='email'className='form-control' onChange={(event)=>{
            setform({...form,email:event.target.value})
    }}/></div>
        <div className='form-group'><input type="text" name='password' placeholder='password' className='form-control' onChange={(event)=>{
        setform({...form,password:event.target.value})
        }}/></div>
        <div className='form-group'><input type="submit" value="submit"></input></div>
        </form>
        </div>
    </div>
  )
}

export default Formusestate

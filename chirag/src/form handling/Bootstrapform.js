//form with bootstrap
import React, { Component } from 'react'

export class Bootstrapform extends Component {
    state={username:"",
          dob:"",
           password:"",
            mobile_number:"",
            address:""}

    update=(event)=>{
        this.setState({ [event.target.name]: event.target.value })
      console.log(this.state)
    }

    store_data=(event)=>{
        event.preventDefault()
    }
    
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-lg bg-secondary justify-content-center text-white'>
                <h2>REGISTRATION</h2>
            </nav>
        <div className="container ">
            
            <div className="row">
                <div className="col-3"></div>
                <div className="col-5">
                    <form  onSubmit={this.store_data}>
                        <div className='form-group'>
                    <label>USERNAME</label>
            <input type="text" name='username' onChange={this.update} className="form-control" /><br></br>
            </div>
            <div className='form-group'>
                    <label>DOB</label>
            <input type="date" name='dob' onChange={this.update} className="form-control" /><br></br>
            </div>
            <div className='form-group'>
                    <label>PASSWORD</label>
            <input type="text" name='password' onChange={this.update} className="form-control" /><br></br>
            </div>
            <div className='form-group'>
                    <label>MOBILE_NUMBER</label>
            <input type="text" name='mobile_number' onChange={this.update} className="form-control" /><br></br>
            </div>
            <div className='form-group'>
                    <label>ADDRESS</label>
            <input type="text" name='address' onChange={this.update} className="form-control" /><br></br>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-3 form-group">
                    <button className='btn btn-primary'>SUBMIT</button>
                </div>
            </div>
                </form>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Bootstrapform

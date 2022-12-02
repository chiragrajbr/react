import React, { Component } from 'react'

export class Registration  extends Component {
    state={username:"",
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
        <form  onSubmit={this.store_data}>
            <pre>{JSON.stringify(this.state)}</pre>
            <label>username</label>
            <input type="text" name='username' onChange={this.update} /><br></br>
            <label>password</label>
            <input type="text" name='password' onChange={this.update} /><br></br>
            <label>mobile number</label>
            <input type="number" name='mobile_number'  onChange={this.update} /><br></br>
            <label>address</label>
            <input type="text" name='address' onChange={this.update} /><br></br>
            <input type="submit" value="login"></input>
        </form>
        
      </div>
    )
  }
}

export default Registration 

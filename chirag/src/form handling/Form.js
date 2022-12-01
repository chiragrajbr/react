//form handling in react using onchange-it changes data while we typing
//prevent -it is used to prevent data 
//preventDefault()--to prevent data 
import React, { Component } from 'react'

export class Form extends Component {
    state={
        user_name:"",
        password:" "
    }
    user_name=(event)=>{
        this.setState({user_name:event.target.value})
    }
    password=(event)=>{
        this.setState({password:event.target.value})
    }
    prevent_data=(event)=>{
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <div className="container">
            <center>
            <h3>form handling</h3>
            <form onSubmit={this.prevent_data}>
        <label>user_name:</label>
        <input type="text" value={this.state.user_name} onChange={this.user_name} /> <br/><br/>
        <label>password:</label>
        <input type="text" value={this.state.password} onChange={this.password} /><br/><br/>
        <input type="submit" value="login" />
        </form>
        </center>
        
        </div>
      </div>
      
    )
  }
}

export default Form

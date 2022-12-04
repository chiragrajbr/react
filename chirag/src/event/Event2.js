import React, { Component } from 'react'

export class Event2 extends Component {
    state={
        message:""

    }
    bind_message=(add)=>{
    this.setState({message : add})
    }
    
  render() {
    return (
      <div >
        <div className="container-fluid ">
        <center>
        <p class="p" ><h1 className='text-white' >EVENT BINDING</h1></p>
       <div className="col">
        <h2 className='text-primary'>{this.state.message}</h2></div>
        <button  onClick={this.bind_message.bind (this,"Good morning")}>GM</button>&nbsp;
        <button onClick={this.bind_message.bind(this,"Good afternoon")}>GA</button>&nbsp;
        <button onClick={this.bind_message.bind(this,"Good night")}>GN</button>
        </center>
        </div>
      </div>
    )
  }
}

export default Event2

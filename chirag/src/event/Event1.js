//event handling
import React from "react";
class Event1 extends React.Component{
    state={
        message:"WELCOME" 

    }
    update_message=(a)=>{
        this.setState({message : a})
    }
    render(){
        return<div>
            <nav class="navbar bg-info mt-5"></nav>
            <div className="container"></div>
            <div className="row">
                <div className="col-5"></div>
                <div className="col-4">
            <h4>YOUR:{this.state.message}</h4>
            <button className="btn-primary" onClick={this.update_message.bind(this,"order is placed")}>buy</button>&nbsp;
            <button className="btn-primary" onClick={this.update_message.bind(this,"item has been sold")}>sell</button>&nbsp;
            <button className="btn-primary" onClick={this.update_message.bind(this,"item added to cart")}>cart</button>
            </div>
            </div>
            </div>
    }
}
export default Event1
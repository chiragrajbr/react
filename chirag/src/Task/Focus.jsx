//auto focus method
import React, { Component } from 'react'

export class Color extends Component {
    constructor(props){
        super(props)
        this.oo=React.createRef()
    }
    componentDidMount(){
        this.oo.current.focus()
    }
    
    render() {
    return (
      <div>
        <form className='form-group mt-4' >
        <div className="container">
         <input type="text" placeholder='email'   className="form-control" />&nbsp;
        <input type="text" placeholder='password'ref={this.oo}  className="form-control" />
        </div>
        </form>
      </div>
    )
  }
}

export default Color

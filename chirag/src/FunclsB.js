import React from "react"
class FunclsB extends React.Component{
    render(props){
        return <div>
           <h1>cars:{JSON.stringify(this.props.cars)}</h1> 
           <h1>bikes:{JSON.stringify(this.props.bikes)}</h1>

        </div>
    }
}
export default FunclsB
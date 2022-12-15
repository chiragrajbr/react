import React from "react"
class ClsB extends React.Component{


    render(props){
        return <div>

            <h1>this is class b page</h1>
            <h3>gmail:{JSON.stringify(this.props.gmail)}</h3>
            <h3>team members:{JSON.stringify(this.props.team)}</h3>
            
            </div>
    }
}
export default ClsB
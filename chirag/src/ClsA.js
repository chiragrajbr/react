import React from "react"
import ClsB from "./ClsB"
class ClsA extends React.Component{
      team=["chirag","muni","darshan","akash"]
      email={
        chirag:"chiru@gmail.com",
        darshu:"darshu@gmail.com",
        muni:"munimuni@gmail.com"
      }
      

    render(){
        return <div>
            <h1>class A</h1>
            
            <ClsB team={this.team} gmail={this.email} boolean={this.a}/>

        </div>
    }
}
export default ClsA
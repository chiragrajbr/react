import React from "react"

class Cls1 extends React.Component{
    name="chirag"
    location="mandya"
    email="chirag@gmail.com"


    render(){
        return<>
        <h1>name:{this.name}</h1>
        <h1>location:{this.location}</h1>
        <h1>email:{this.email}</h1>
        <button className="btn btn-primary">click</button>
         
         </>
    }

}
export default Cls1
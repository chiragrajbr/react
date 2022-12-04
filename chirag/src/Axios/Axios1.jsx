import axios from "axios";
import React from "react";
class Axios1 extends React.Component{
    constructor(){
        super()
        this.state={
            user:[]
        }
         

       }
       componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            this.setState({user:response.data})
        })
        .catch((error)=>{
            console.log("error")
        })
       }
    render(){ 
        
        return<div>
            {
               this.state.user.length>0 ?  <>
               <table>
                <thead>
                 <tr>
                   <th>id</th>
                   <th>name</th>
                   <th>username</th>
                   <th>email</th>
                 </tr>
                </thead>
                <tbody>
                    {
                        this.state.user.map((user)=>{
                          return <>
                          <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            
                          </tr>
                          </>
                        })
                    }

                </tbody>
            </table>
               </>   :null
            }
           
        </div>
    }

}
export default Axios1
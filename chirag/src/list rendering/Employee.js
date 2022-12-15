import React from "react";
import employees from "./data";
class Employee extends React.Component{
    render(){
        return<div>
            <div className="container">
            <div className="row">
                <div className="col md-5">
            <table className="table table-hover" >
                <thead className="table table-primary">
                    <tr>
                        <td>id</td>
                        <td>first name</td>
                        <td>last name</td>
                        <td>email</td>
                        <td>gender</td>
                    </tr>
                </thead>
                <tbody>{
                    employees.map((ok)=>{
                        return <tr key={ok.id}>
                            <td>{ok.id}</td>
                            <td>{ok.first_name}</td>
                            <td>{ok.last_name}</td>
                            <td>{ok.email}</td>
                            <td>{ok.gender}</td>
                        </tr>
                    })}
                
                    
                </tbody>

            </table>
            </div>
            
        </div>
        </div>
        </div>

        
    }
}
export default Employee
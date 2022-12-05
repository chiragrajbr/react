import React, { Component } from 'react'

 class ContactDetails extends Component {
    select_data=(show)=>{
     this.props.views(show)
    }
  render() {
    return (
      <div className='container'>
        
        <div class="row">
          <div className="col">
        
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>address</th>
                </tr>
            </thead>
            <tbody>
            {
                this.props.details.map((show,index)=>{
                    return <>
                     <tr  key={index} onMouseOver={this.select_data.bind(this,show)}>
                    <td>{show.id}</td>
                    <td>{show.name}</td>
                    <td>{show.email}</td>
                    <td>{show.address.city}</td>
                    
                </tr>
                    </>
                })
            }
               
            </tbody>
           
            
        </table>
        </div>
        </div>
        </div>
        
      
    )
  }
}

export default ContactDetails

import React, { Component } from 'react'
 class ContactList extends Component {
  render() {
    return (
      <div>
        <div className="card text-center bg-warning">
            <div className="card-hedder">USER DETAILS
            <p>{JSON.stringify(this.props.views)}</p>
            </div>
            <div className="card-body">
                <ul className=' list-group list-group-bg-dark'>
                    <li className='list-group-item list-group-item-primary'>ID:{this.props.list.id}</li>
                    <li className='list-group-item list-group-item-secondary'>NAME:{this.props.list.name}</li>
                    <li className='list-group-item list-group-item-danger'>E-MAIL:{this.props.list.email}</li>
                    
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default ContactList

import React, { Component } from 'react'
 class ContactList extends Component {
  render() {
    return (
      <div>
        <div className="card">
            <div className="card-hedder">USER DETAILS
            <p>{JSON.stringify(this.props.views)}</p>
            </div>
            <div className="card-body">
                <ul className=' list-group'>
                    <li className='list-group-item'>{this.props.list.id}</li>
                    <li className='list-group-item'>{this.props.list.name}</li>
                    <li className='list-group-item'>{this.props.list.email}</li>
                    
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default ContactList

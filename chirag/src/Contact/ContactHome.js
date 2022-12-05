import Axios from 'axios'
import React, { Component } from 'react'
import ContactDetails from './ContactDetails'
import ContactList from './ContactList'

 class ContactHome extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
            view:{}
        }
    }
    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((correct)=>{
            this.setState({users:correct.data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    view_details=(show)=>{
        console.log(show.name.first)
        this.setState({view:show})
    }
  render() {
    return ( 
      <div>
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-5">
                    <h1>CONTACT APP</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                <ContactDetails details={this.state.users} views={this.view_details} />
                </div>
                <div className="col-4">
                    {
                        Object.keys(this.state.view).length>0  ? <><ContactList list={this.state.view} /></> : null
                    }
                </div>
            </div>
        </div>
     </div>
        
    )
  }
}

export default ContactHome

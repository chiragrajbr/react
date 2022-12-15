import React from 'react'
import "./Contact.css"
import phone from "../../Image/phone.jpg"
import email from "../../Image/email.jpg"
import location from "../../Image/location.jpg"

const Contact = () => {
  return (
    <div>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h2 className="c-title">
                    Let's discuss your project
                </h2>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={phone} alt="" className='c-icon' />+91 9591820040
                    </div>
                    <div className="c-info-item">
                        <img src={email} alt="" className='c-icon' />chiragrajbr@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={location} alt="" className='c-icon' />#324 nagarbhavi circle banglore.
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                  <h3><b>whats your story?</b></h3>  
                    get in touch,always available for freelansing if the right project comes along me.
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-7">
                    <form action="mailto:chiragrajbr@gmail.com">
                        <input type="text" placeholder='Name' name="user_name" className='form-control' /><br/>
                        <input type="text" placeholder='Subject' name="user_subject" className='form-control' /><br/>
                        <input type="text" placeholder='User email' name="user_email" className='form-control' />
                        <textarea rows="5" cols="6" placeholder='message' name="message" className='form-control' />  
                        <button className='btn btn-primary'>submit</button>                   
                        
                    </form>
                    </div>
                    </div>
                    </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

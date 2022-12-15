import React from 'react'
import { useRef,useEffect } from 'react';

const Login = () => {
  const ok= useRef(null);

  useEffect(() => {
    if (ok.current) {
      ok.current.focus();
    }
  }, []);

   /*let msg= ()=>{
    alert("please check once before signup")
    
  }*/

     return (
      
    <div className="container-fluid"  style={{ 
        backgroundImage: `url("https://media.istockphoto.com/id/474354640/photo/orange-wall-texture.jpg?s=170667a&w=0&k=20&c=9JjfQdrALWOZwq0hM-hqsMReDj2o0TCo11qHA87Y7Yk=")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:'100%'}}>
          
      <div className="container">
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <h2 className='text-white'>REGISTER HERE....</h2>
                <form className='mt-4'>
                    <div className='form-group'><input type="text" placeholder='user name' className='form-control' required/></div>
                    <div className='form-group'><input type="text" placeholder='email/mobile no' className='form-control' ref={ok} required/></div>
                    <div className='form-group'><input type="password" placeholder='password' className='form-control' required/></div>
                     <div className="row">
                        <div className="col-4"></div>
                        <div className="col-">
                        <button className='btn btn-primary btn-sm' >sign up</button>

                        </div>
                     </div>
                    </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login

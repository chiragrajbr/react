import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import {gmaction,gnaction} from "../redux1/mg.action"

const Message = () => {
    let dispatch=useDispatch();
    let message=useSelector((state)=>{
      return state.message
    })
  
   let gm_handler=()=>{
    dispatch(gmaction())
   }
   let gn_handler=()=>{
    dispatch(gnaction())

   }
  return (
    <div>
       <h1>message:{message.message}</h1> 
      <button onClick={gm_handler}>gm</button>
      {/*if user click a button dispatch action ,use dispatch hook */}
      <button onClick={gn_handler}>gn</button>
    </div>
  )
}

export default Message

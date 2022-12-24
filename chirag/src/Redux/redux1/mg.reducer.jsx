import {gm,gn} from "../redux1/mg.action"


let initialstate={
    message:"hello"
}
let mgreducer = (state=initialstate,action) => {
    switch(action.type){
        case gm :
            return {message:"good morning"}
        case gn :
            return{message:"good night"}
        default :
           return {state}
    }
}

export  {mgreducer}
//reducer is a pure function it takes state and action

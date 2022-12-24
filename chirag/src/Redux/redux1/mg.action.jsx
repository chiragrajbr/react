const gm="gm"
const gn="gn"

let gmaction=()=>{
    console.log("gm handler")
    return {type:gm}
}
let gnaction=()=>{
    console.log("gn handler")
    return {type:gn}
}


export {gm,gn,gmaction,gnaction}
//action-action is a function return actionable object
//naming export
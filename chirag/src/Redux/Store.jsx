//store - it is a object
//how to read store data---use selector component
import {Rootreducer} from "../Redux/Rootreducer"
import {createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
let store=createStore(Rootreducer,composeWithDevTools());
export {store}
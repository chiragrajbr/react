import { combineReducers } from "redux";
import {mgreducer} from "../Redux/redux1/mg.reducer"

let Rootreducer=combineReducers({message:mgreducer})
export {Rootreducer}
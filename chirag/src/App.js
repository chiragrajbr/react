//import ComponentA from "./ComponentA"
//import ClsA from "./ClsA"
//import FunclsA from "./FunclsA"
//import ClsfunA from "./ClsfunA"
//import Product from "./state/product"
//import Flip from "./Flip"
//import Event1 from "./event/Event1"
//import Message from "./event/Message"
//import Employee from "./list rendering/Employee"
//import Form from "./form handling/Form"
//import Registration from "./form handling/Registration "
//import Bootstrapform from "./form handling/Bootstrapform"
//import Event2 from "./event/Event2"
//import Axios1 from "./Axios/Axios1"
//import ContactHome from "./Contact/ContactHome"

import Navbar from "./Routing/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Routing/Home"
import Service from "./Routing/Service"
import About from "./Routing/About"

function App(){
    return <div>
        <Router>
       <Navbar />
       <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
       </Routes>
       </Router>
        </div>
}
export default App

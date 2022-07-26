import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ContactUs from './components/ContactUs/ContactUs.js'
import Login from './components/Login/Login.js'
import Home from './components/Home/Home.js'

export const App = () => {
  const [usercheck, setUsercheck] = useState(false);
  return (

    <Router>


      <Navbar usercheck={usercheck} setUsercheck={setUsercheck} />
      
      
      <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/contact" exact element={<ContactUs />}> </Route>
          <Route path="/auth" exact element={<Login usercheck={usercheck} setUsercheck={setUsercheck} />}></Route>
          
      </Routes>


    </Router>

  )
}


export default App;

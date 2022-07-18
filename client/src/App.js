import React from 'react'
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
  

  return (

    <Router>


      <Navbar />
      
      
      <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/contact" exact element={<ContactUs />}> </Route>
          <Route path="/auth" exact element={<Login />}></Route>
          
      </Routes>


    </Router>

  )
}


export default App;

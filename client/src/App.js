import React from 'react'
import Navbar from './components/Navbar.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact_Us from './components/ContactUs.js'
import Login from './components/Login.js'
import Home from './components/Home.js'
export const App = () => {
  

  return (

    <Router>


      <Navbar />
      
      
      <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/contact" exact element={<Contact_Us />}> </Route>
          <Route path="/login" exact element={<Login />}></Route>
          
        </Routes>


    </Router>

  )
}


export default App;

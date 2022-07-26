import React, { useState,useEffect } from 'react'
import { Button, Grid, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import { logout } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
const Navbar = ({usercheck,setUsercheck}) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('profile')));

    const handleLogout = ()=>{
        dispatch(logout());
    }
    
    useEffect(() => {
    const token = user?.token;
      //   console.log(user);
      //   console.log(token);
      if(token){
          const decodedToken = decode(token);
          if(decodedToken.exp * 1000 < new Date().getTime()){
              handleLogout();
          }
      }
        
        console.log(JSON.parse(localStorage.getItem('profile')));
        setuser(JSON.parse(localStorage.getItem('profile')));
        setUsercheck(true)
    }, [location]);
    
    
    


    return (
        <>

            <Box className='navbar'
                sx={{
                    p: 2,
                    height: 25,
                    color: 'white'
                }}
            >

                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                >

                    <Grid item sm={4}><DeleteIcon /></Grid>
                    <Grid item ><Link className='link' to="/">Home</Link></Grid>
                    <Grid item ><Link className='link' to="/contact">Contact Us</Link></Grid>
                    {
                        !user ?<Grid item ><Link className='link' to="/auth">Login</Link></Grid> :  <Grid item ><Link className='link' to="/auth" onClick={handleLogout}>Log Out</Link></Grid>
                    }
                    {
                        user && <Grid item ><Link className='link' to="/">{user.result.name}</Link></Grid>
                    }
                    
                </Grid>



            </Box>
        </>
    )
}

export default Navbar
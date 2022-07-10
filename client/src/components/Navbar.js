import React from 'react'
import {Button, Grid, Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <>

            <Box
                sx={{
                    p: 2,
                    
                    color:'white'  
                }}
            >
                
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        
                        <Grid item sm={4}><DeleteIcon/></Grid>
                        <Grid item ><Link to="/">Home</Link></Grid> 
                        <Grid item ><Link to="/contact">Contact Us</Link></Grid>
                        <Grid item ><Link to="/login">Login</Link></Grid>
                        <Grid item ><Link to="/search">Search</Link></Grid>
                    </Grid>


                
            </Box>
        </>
    )
}

export default Navbar
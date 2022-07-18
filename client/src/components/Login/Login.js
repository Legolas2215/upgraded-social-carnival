import React, { useState } from 'react'
import Container from '@mui/material/Container'
import { Paper, Grid, Typography, Box, Button, Icon } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputForm from './InputForm.js'
import { GoogleLogin } from 'react-google-login';
import GoogleIcon from '@mui/icons-material/Google';
import { gapi } from "gapi-script";
import { useDispatch } from 'react-redux'
import { googleLogin } from '../../actions/auth.js';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "383219579897-ra1iskjc6um398k4bh4c1ig0n7lq59rh.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });


  const [signUp, setsignUp] = useState(false);
  const handleSubmit = () => {

  };
  const handleChange = () => {

  };
  const handleClear = () => {

  };

  const googleSuccess =async (res)=>{
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch(googleLogin(result,token));
      navigate('/');
    } catch (error) {
      console.log(error);
    }

  }
  const googleFailure =(error)=>{
    console.log(error);
    console.log("Google Authentication Failed! Try Again or Switch to general SignUp");
  }

  return (
    <>
      <Container maxWidth="sm" sx={{ marginTop: 10 }}>
        <Paper elevation={3}>
          <Grid container direction="row" justifyContent="space-around" alignItems="center" sx={{ marginBottom: 2 }}>
            <AccountCircleIcon sx={{ fontSize: 65, mt: 2 }} />
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid container direction="row" justifyContent="center">
              <Typography variant="h5" color="initial" >
                {signUp ? "Sign Up" : "Log In"}
              </Typography></Grid>

            <Grid container >
              {
                signUp && (
                  <>
                    <InputForm name="firstName" label="First Name" handleChange={handleChange} type="text" />
                    <InputForm name="lastName" label="Last Name" handleChange={handleChange} type="text" />
                  </>
                )
              }
              <InputForm name="email" label="Email" handleChange={handleChange} type="email" />
              <InputForm name="password" label="Password" handleChange={handleChange} type="password" />


              {signUp && (
                <>
                  <InputForm name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />

                </>
              )}

            </Grid>
            <Grid container justifyContent="space-around">

              <Grid item ><Button variant="contained" sx={{ mt: 3, mb: 3 }} color="primary" size="large" type="submit" fullWidth>{signUp ? "sign Up" : "Log In"}</Button></Grid>
              <Grid item ><Button variant="contained" sx={{ mt: 3, mb: 3 }} color="primary" size="large" onClick={handleClear} fullWidth>Clear</Button>
              </Grid>
              <Grid item ><Box sx={{ mt: 3, mb: 3 }} ><GoogleLogin
                clientId="383219579897-ra1iskjc6um398k4bh4c1ig0n7lq59rh.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button
                    variant="contained"
                    color="primary" size="large"
                    onClick={renderProps.onClick}
                    fullWidth
                    disabled={renderProps.disabled}
                    startIcon={<GoogleIcon />}
                    
                    
                  >Google SignIn</Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                buttonText="Login"
                cookiePolicy={'single_host_origin'}
              />
              </Box></Grid>
            </Grid>
          </form>

          <Grid container direction="row" justifyContent="center" >
            <Typography variant="h5" color="initial" >
              {signUp ? "Already have an Account?" : "Don't have an Account?"}
            </Typography>
            <Button variant="contained" color="primary" size="small" sx={{ ml: 1 }} onClick={() => signUp ? setsignUp(false) : setsignUp(true)} >{signUp ? "Log In" : "Sign Up"}</Button>
          </Grid>
          <br />
        </Paper>
      </Container>
    </>
  )
}

export default Login
import { Paper, TextField, Button, Typography, Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost,updatePost } from '../../actions/posts.js';
import FileBase from 'react-file-base64';

const Form = ({currentId, setCurrentId}) => {
  const dispatch = useDispatch();
  
  const post = useSelector((state) => currentId ? state.posts.find((p)=> p._id === currentId): null);

  const user = JSON.parse(localStorage.getItem('profile'));
  // console.log(user.result.name);
  const handleSubmit = (e)=>{
    
    e.preventDefault();
    if(!currentId){
      dispatch(createPost({...postData, name: user?.result?.name}));
    }
    else{
      dispatch(updatePost(currentId,{...postData, name: user?.result?.name}));
      setCurrentId(null);
    }
    
    handleClear();
  };

  useEffect(() => {
    if(post)  setpostData(post);
  }, [post])
  

  const handleClear = ()=>{
    setpostData({title: '', message: '', tags: '',selectedFile: ''})
    setCurrentId(null);
  }

  const [postData, setpostData] = useState({
    title: '', message: '', tags: '',selectedFile: ''
  });
  if(!user){
    return (
      <Paper elevation={5} square>
        <Typography variant="h4" align="center" sx={{p:1}}>LogIn to create your own memories and like others. Join the gang!!</Typography>
      </Paper>
    )
  }

  return (
    <Paper elevation={5} square>
      <form autoComplete='off' onSubmit={handleSubmit} >
        <Box sx={{ml: 2,mr:3}}>
      <Typography variant="h4" align="center" sx={{p:1}}>{!currentId ? 'New' :'Edit' } Post </Typography>
      {/* <TextField name="creator" sx={{p:0.9}} varaint="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>{setpostData({...postData, creator: e.target.value})}}></TextField> */}
      <TextField name="Title" sx={{p:0.9}} varaint="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>{setpostData({...postData, title: e.target.value})}}></TextField>
      <TextField name="Message" sx={{p:0.9}} varaint="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=>{setpostData({...postData, message: e.target.value})}}></TextField>
      <TextField name="Tags" sx={{p:0.9}} varaint="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=>{setpostData({...postData, tags: e.target.value.split(',')})}}></TextField>
      <Box sx={{mt:1, ml:1}}>
        <FileBase
        type="file"
        multiple={false}
        onDone={({base64})=>{
          setpostData({...postData, selectedFile: base64})
        }}
      ></FileBase></Box>
      <br></br>
      <Grid container spacing={3}>
        <Grid item sm={6}><Button variant="contained" sx={{mb:1}} color="primary" size="large" type="submit" fullWidth>Submit</Button></Grid>
        <Grid item sm={6}><Button variant="contained" sx={{mb:1}} color="primary" size="large" onClick={handleClear} fullWidth>Clear</Button></Grid>
      </Grid>
      
      
      </Box>
      </form>
      <br></br>

    </Paper>
  )
}

export default Form
import React from 'react'
import Post from './post/post.js'
import { useSelector } from 'react-redux'
import { Grid,LinearProgress } from '@mui/material'



const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts);
  
  return (
    !posts.length ? <LinearProgress color="inherit" /> :(
      <>
      <Grid container>
        {
          posts.map((post)=>(
            <Grid item key={post._id} xs={12} sm={6} md={4} sx={{marginTop:2}}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))
        }
        
      </Grid>
      <br /><br />
      </>
    )
  )
}

export default Posts
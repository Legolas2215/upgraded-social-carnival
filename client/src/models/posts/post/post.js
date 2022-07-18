import { Card, CardMedia, Grid } from '@mui/material'
import React from 'react'
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import { shadows } from '@mui/system';


const Post = ({ post,setCurrentId }) => {
  const value = post.creator;
  const dispatch = useDispatch();
  const handleEdit = ()=>{
    setCurrentId(post._id);
  }
  const handleDelete = ()=>{
    dispatch(deletePost(post._id));
  }
  const handleLike = ()=>{
    dispatch(likePost(post._id));
  }

  return (
    <Card sx={{ maxWidth: 345}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {JSON.stringify(value)[1].toUpperCase()}
          </Avatar>
        }
        sx={{p:2}}
        title={post.title}
        subheader={moment(post.createdAt).fromNow()}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.selectedFile}
        alt={`Image by ${post.title}`}
      />
      <CardContent sx={{height:100}}>
        <Typography variant="h7" color="text.tertiary">
          {
            post.tags.map((tag)=>{
              return `#${tag} `
            })
          }
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {post.message.length<90 ? post.message : post.message.slice(0,90)}
        </Typography>
      </CardContent>
      <Grid container
        direction="row"
        justifyContent="space-around"
        alignItems="center">
          
        <Grid item >
          <IconButton aria-label="add to favorites" onClick={handleLike} sx={{':hover':{
            color: 'red'
          }}}>
            <FavoriteIcon /> {post.likeCount}
          </IconButton>
        </Grid>
        <Grid item >
          <IconButton aria-label="edit" onClick={handleEdit} sx={{':hover':{
            color: 'red'
          }}}>
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item >
          <IconButton aria-label="delete" onClick={handleDelete} sx={{':hover':{
            color: 'red'
          }}}>
            <DeleteForeverIcon />
          </IconButton>
        </Grid>
        <Grid item >
          <IconButton aria-label="share" sx={{':hover':{
            color: 'red'
          }}}>
          <ShareIcon /> 
          </IconButton>
        </Grid>
      </Grid>



    </Card>
  );
}

export default Post






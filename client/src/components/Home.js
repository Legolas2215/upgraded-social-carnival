import React, { useEffect, useState } from 'react'
import Posts from '../models/posts/posts.js'
import Form from '../models/forms/form.js'
import { Grid, Grow, Box } from '@mui/material'
import { getPosts } from '../actions/posts.js'
import { useDispatch } from 'react-redux'

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());

    }, [currentId, dispatch])


    return (
        <Box sx={{ marginTop: 4, mr: 7, ml: 5 }}>

            <Grow in>

                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Form setCurrentId={setCurrentId} currentId={currentId} />
                    </Grid>
                </Grid>

            </Grow>
        </Box>
    )
}

export default Home
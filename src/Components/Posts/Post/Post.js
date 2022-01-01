import React, { useState } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AlertDialog from './Dialog';
const Post = ({post}) => {
    const{userName,profile_img,Post,dateTime,image}=post;
    const [open,setOpen]=useState(false)
    const handlePost=()=>{
        setOpen(true)
    }
    return (
        <div style={{marginTop:40,boxShadow:'0px 0px 2px gray',borderRadius:4}}>
             <Card sx={{ width:600, marginLeft:'auto',marginRight:'auto',padding:3 }}>
      <CardHeader
        avatar={
            <Avatar alt={userName} src={profile_img} />
        }
        action={
            <IconButton onClick={handlePost} aria-label="settings">
              <MoreVertIcon/>
            </IconButton>
          }
        title={userName}
        subheader={dateTime}
      />
     {
         open&&<AlertDialog open={open} setOpen={setOpen} ></AlertDialog>
     }
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {Post}
        </Typography>
      </CardContent>
    {
        image&&<CardMedia
        style={{borderRadius:4}}
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
    }
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        </IconButton>
        <IconButton aria-label="share">
        </IconButton>
      
      </CardActions>
     
    </Card>
        </div>
    );
};

export default Post;
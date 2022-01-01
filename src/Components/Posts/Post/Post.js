import React from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const post = ({post}) => {
    const{userName,profile_img,Post,dateTime,image}=post;
    const handlePost=()=>{
        console.log('hello i am workking')
    }
    return (
        <div style={{marginTop:'50px'}}>
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

export default post;
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';

const post = ({post}) => {
    const{userName,profile_img,Post,dateTime,image}=post;
    return (
        <div>
             <Card sx={{ maxWidth: 345, marginLeft:'auto',marginRight:'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{background:'red'}} aria-label="recipe">
            R
          </Avatar>
        }
       
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
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
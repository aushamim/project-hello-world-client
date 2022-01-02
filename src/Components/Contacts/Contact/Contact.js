import { Box,IconButton, Typography } from '@mui/material';
import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Contact = ({contact,total}) => {
    const {profile_img,userName} =contact;
    const handleContact=()=>{
        console.log('hello user');
    }
    return (  
            
              <ListItem
              sx={{
                  display:'flex',
                  alignItems:'center',
                }}
              alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={profile_img} />
                </ListItemAvatar>
                <Typography>
                    {userName}
                </Typography>
                <IconButton sx={{
                    marginLeft:'auto'
                }} onClick={handleContact} aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
                
              </ListItem>
             
              
        
    );
};

export default Contact;
import React from 'react';
import {Box, Typography, } from '@mui/material';
const Invitation = () => {
    return (
       <Box sx={{
           display:{xs:'none', lg:'block'},
           backgroundColor:'white',
           borderRadius:5,
           marginTop:5,
           }}>
           <Box
           sx={{
              height:'200px',
              border:'2px solid green',
              backgroundImage:"url('https://i.ibb.co/XkDvzjT/Darjeeling-Gangtok-Tour-Package-Small.jpg')",
              backgroundPosition:'cover',
              backgroundRepeat:'no-repeat'
           }}
           >
               <Typography>
                   its world
               </Typography>
           </Box>
       </Box>
    );
};

export default Invitation;
import React from 'react';
import {Box, Typography, typographyClasses} from '@mui/material';
const Invitation = () => {
    return (
       <Box sx={{
           display:{xs:'none', lg:'block'},
           backgroundColor:'white',
           borderRadius:5,
           marginTop:5,
           }}>
            <Typography>
                hello world , i am invitation
            </Typography>
       </Box>
    );
};

export default Invitation;
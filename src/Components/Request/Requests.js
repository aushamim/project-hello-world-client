import { Box, Chip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Request from './Request/Request';

const Requests = () => {
    const [requests, setRequests]=useState([]);
    const [isloading,setIsLoading]=useState(false);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setRequests(data))
    },[])
    return (
        <Box sx={{
                marginLeft: { xs: "auto", lg: "100px" },
                marginRight: { xs: "auto", lg: "10px" },
                width: { xs: "max-content", lg: "150" },
        }}>
              <Box
        sx={{
            display:'flex',
            justifyContent:'space-between',
        }}
        >
               <Typography>
                   Requests
               </Typography>
               <Chip
               sx={{marginRight:2}}
               label={requests.length}/>
           </Box>
            {
                requests.map(request=><Request
                key={request.id}
                request={request}
                ></Request>)
            }
        </Box>
    );
};

export default Requests;
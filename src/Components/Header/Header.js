import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ padding: "15px", backgroundColor: "white" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{ background: "#eff4fc", padding: "5px", borderRadius: "15px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chart-bubble"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#1877f2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="6" cy="16" r="3" />
            <circle cx="16" cy="19" r="2" />
            <circle cx="14.5" cy="7.5" r="4.5" />
          </svg>
        </Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: "text.secondary", marginLeft: "10px" }}
        >
          BYE WORLD
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;

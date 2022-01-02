import { Box } from "@mui/material";
import React from "react";
import defaultStory from "./Media/default.jpg";

const Story = () => {
  return (
    <Box>
      <Box sx={{ width: { xs: "50px" } }}>
        <img src={defaultStory} alt="" style={{ width: "100%" }} />
      </Box>
    </Box>
  );
};

export default Story;

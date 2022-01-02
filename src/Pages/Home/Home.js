import { Box } from "@mui/material";
import React from "react";
import Contacts from "../../Components/Contacts/Contacts";
import Navigation from "../../Components/Navigation/Navigation";
import Posts from "../../Components/Posts/Posts";
import Requests from "../../Components/Request/Requests";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "block", lg: "grid" },
          marginTop: "20px",
          marginBottom: "20px",
          gridTemplateColumns: "repeat(4,1fr)",
          gridGap: "20px",
        }}
      >
        <div style={{ padding: "20px" }}>
          <Navigation></Navigation>
        </div>
        <div
          style={{
            gridColumn: "span 2",
            padding: "20px",
          }}
        >
          <Posts></Posts>
        </div>
        <div style={{ 
          padding: "20px",
          }}>
          <Requests></Requests>
          <Contacts></Contacts>
        </div>
      </Box>
    </>
  );
};

export default Home;

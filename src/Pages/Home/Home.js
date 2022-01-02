import { Box } from "@mui/material";
import React from "react";
import Contacts from "../../Components/Contacts/Contacts";
import Navigation from "../../Components/Navigation/Navigation";
import NewPost from "../../Components/NewPost/NewPost";
import NewPostBox from "../../Components/NewPost/NewPostBox";
import Posts from "../../Components/Posts/Posts";
import Story from "../../Components/Story/Story";
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
          gridGap: "50px",
        }}
      >
        {/* Left Rail */}
        <div style={{ padding: "20px" }}>
          <Navigation></Navigation>
        </div>
        {/* Main Body */}
        <div
          style={{
            gridColumn: "span 2",
            padding: "20px",
          }}
        >
          <Story></Story>
          <NewPost></NewPost>
          <NewPostBox></NewPostBox>
          <Posts></Posts>
        </div>
        {/* Right Rail */}
        <div
          style={{
            padding: "20px",
          }}
        >
          <Requests></Requests>
          <Contacts></Contacts>
        </div>
      </Box>
    </>
  );
};

export default Home;

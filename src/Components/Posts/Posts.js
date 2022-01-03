import React, { useEffect, useState } from "react";
import "./Posts.css";
import Post from "./Post/Post";
import { Box } from "@mui/material";

const Posts = () => {
  const [userPosts, setUserPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => data.sort((a, b) => b.time - a.time))
      .then((sortedData) => setUserPost(sortedData));
  }, []);
  return (
    <Box
      sx={
        {
          // marginLeft: { xs: "auto", lg: "50px" },
          // marginRight: { xs: "auto", lg: "50px" },
          // width: { xs: "max-content", lg: "300px" },
        }
      }
    >
      {userPosts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </Box>
  );
};

export default Posts;

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import loadingImg from "../Media/loadingImg/loading.gif";
import Post from "./Post/Post";
import "./Posts.css";

const Posts = () => {
  const [userPosts, setUserPost] = useState([]);
  useEffect(() => {
    fetch("https://project-hello-world-server.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => data.sort((a, b) => b.time - a.time))
      .then((sortedData) => setUserPost(sortedData));
  }, []);
  return (
    <Box>
      {userPosts.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={loadingImg} alt="" />
        </div>
      ) : (
        <>
          {userPosts.map((post) => (
            <Post post={post} key={post._id}></Post>
          ))}
        </>
      )}
    </Box>
  );
};

export default Posts;

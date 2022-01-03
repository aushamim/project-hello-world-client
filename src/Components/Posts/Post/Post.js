import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AlertDialog from "./Dialog";
import { Box } from "@mui/system";
const Post = ({ post }) => {
  const { userName, profile_img, Post, dateTime, image } = post;
  const [open, setOpen] = useState(false);
  const handlePost = () => {
    setOpen(true);
  };

  return (
    <>
      <Card
        sx={{
          marginTop: "30px",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "15px",
          boxShadow: "1px 1px 5px #ccc",
          padding: "15px",
          zIndex: "0",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(5,1fr)", lg: "repeat(7,1fr)" },
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <Box>
            <img
              src={profile_img}
              alt={userName}
              style={{ width: "50px", height: "50px", borderRadius: "50px" }}
            />
          </Box>
          <Box
            sx={{
              gridColumn: { xs: "span 3", lg: "span 5" },
              paddingLeft: { xs: "10px", lg: "0" },
            }}
          >
            <Typography>{userName}</Typography>
            <Typography variant="caption">{dateTime}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <IconButton onClick={handlePost} aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          </Box>
        </Box>

        {open && <AlertDialog open={open} setOpen={setOpen}></AlertDialog>}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {Post}
          </Typography>
        </CardContent>
        {image && (
          <CardMedia
            style={{ borderRadius: "10px" }}
            component="img"
            // height="194px"
            width="100%"
            image={image}
            alt="Paella dish"
          />
        )}
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites"></IconButton>
          <IconButton aria-label="share"></IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;

import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Contacts from "../../Components/Contacts/Contacts";
import Header from "../../Components/Header/Header";
import Navigation from "../../Components/Navigation/Navigation";
import Requests from "../../Components/Request/Requests";

const User = () => {
  return (
    <div>
      <>
        <Header></Header>
        <Box
          sx={{
            display: { xs: "block", lg: "grid" },
            marginTop: "20px",
            marginBottom: "20px",
            gridTemplateColumns: "repeat(4,1fr)",
            gridGap: "10px",
          }}
        >
          {/* Left Rail */}
          <Box
            sx={{
              position: "relative",
              display: { xs: "block", lg: "flex" },
              justifyContent: "end",
            }}
          >
            <div>
              <Navigation></Navigation>
            </div>
          </Box>

          {/* Main Body */}
          <div
            style={{
              gridColumn: "span 2",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                background: "white",
                borderRadius: "15px",
                padding: "20px",
                marginBottom: "50px",
              }}
            >
              <Box
                sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
              >
                <Box sx={{ gridColumn: "span 2", padding: "20px" }}>
                  <Typography variant="h5">Nahid Kakku</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: "10px" }}
                  >
                    Welcome to my profile
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h6">500</Typography>
                      <Typography variant="overline">Likes</Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h6">100</Typography>
                      <Typography variant="overline">Followers</Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h6">70</Typography>
                      <Typography variant="overline">Follows</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <img
                    src="https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png"
                    alt="Kakku"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "15px",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Repeat Start */}
            <Box sx={{ marginBottom: "50px" }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(5,1fr)",
                    lg: "repeat(7,1fr)",
                  },
                  padding: "10px",
                  marginBottom: "5px",
                  background: "white",
                  borderRadius: "15px",
                }}
              >
                <Box>
                  <img
                    src="https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png"
                    alt="Kakku"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    gridColumn: { xs: "span 3", lg: "span 5" },
                    paddingLeft: { xs: "10px", lg: "0" },
                  }}
                >
                  <Typography>Kakku</Typography>
                  <Typography variant="caption">1/2/2022</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <IconButton
                    onClick={() => {
                      console.log("Delete");
                    }}
                    aria-label="settings"
                  >
                    <MoreHorizIcon />
                  </IconButton>
                </Box>
              </Box>

              <Box
                sx={{
                  background: "white",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet nihil ratione eum odit perspiciatis libero ut id
                  repellendus, mollitia accusamus laudantium pariatur placeat
                  totam a repudiandae labore aperiam et, tempore exercitationem
                  reprehenderit dolorem, sapiente porro? Impedit reiciendis nam
                  ipsa sapiente atque earum quis odio! Molestiae molestias
                  praesentium libero perferendis ad?
                </Typography>
                <img
                  src="https://i.pinimg.com/originals/e1/85/b5/e185b59733466431da3ea1e068afe5c3.jpg"
                  alt=""
                  style={{ width: "100%", marginTop: "20px" }}
                />
              </Box>
            </Box>
            {/* Repeat End */}
          </div>

          {/* Right Rail */}
          <div
            style={{
              padding: "20px",
              position: "relative",
            }}
          >
            <Requests></Requests>
            <Contacts></Contacts>
          </div>
        </Box>
      </>
    </div>
  );
};

export default User;

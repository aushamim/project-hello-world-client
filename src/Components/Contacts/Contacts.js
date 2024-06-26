import { Box, Chip, Typography } from "@mui/material";
import List from "@mui/material/List";
import React, { useState } from "react";
import loadingImg from "../Media/loadingImg/loading.gif";
import Contact from "./Contact/Contact";
const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useState(() => {
    fetch("https://project-hello-world-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);
  return (
    <>
      <Box
        sx={{
          marginTop: "20px",
          marginLeft: { xs: "auto", lg: "0" },
          marginRight: { xs: "auto", lg: "0" },
          width: { xs: "max-content", lg: "284px" },
          position: "sticky",
          top: "400px",
        }}
      >
        {contacts.length === 0 ? (
          <img src={loadingImg} alt="" />
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>Contacts</Typography>
              <Chip sx={{ marginRight: 2 }} label={contacts.length} />
            </Box>
            <List
              sx={{
                maxHeight: "300px",
                overflow: "scroll",
                overflowX: "hidden",
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
            >
              {contacts.map((contact) => (
                <Contact
                  key={contact._id}
                  total={contacts.length}
                  contact={contact}
                ></Contact>
              ))}
            </List>
          </>
        )}
      </Box>
    </>
  );
};

export default Contacts;

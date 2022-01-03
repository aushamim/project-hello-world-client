import { Box, Chip, Typography } from "@mui/material";
import React, { useState } from "react";
import Contact from "./Contact/Contact";
import List from "@mui/material/List";
const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useState(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setContacts(data));
  }, []);
  return (
    <Box
      sx={{
        marginTop: "20px",
        marginLeft: { xs: "auto", lg: "100px" },
        marginRight: { xs: "auto", lg: "10px" },
        width: { xs: "max-content", lg: "284px" },
        position: "sticky",
        top: "400px",
      }}
    >
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
            key={contact.id}
            total={contacts.length}
            contact={contact}
          ></Contact>
        ))}
      </List>
    </Box>
  );
};

export default Contacts;

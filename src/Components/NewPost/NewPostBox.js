import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
// import useAuth from "../../Hooks/UseAuth/UseAuth";

const NewPostBox = () => {
  //   const { user } = useAuth();
  //   const [singleUserID, setSingleUserID] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://aqueous-springs-11487.herokuapp.com/users`)
  //       .then((res) => res.json())
  //       .then((data) => data.filter((x) => x.email === user.email))
  //       .then((newData) => setSingleUserID(newData[0]._id));
  //   }, [user.email]);

  //   const { postType, view, handleViewType } = useAuth();
  //   const handlePost = () => {
  //     const postData = document.getElementById("postData").value;
  //     const UID = { UID: singleUserID };
  //     const finalPost = { post: postData };
  //     const time = new Date().getTime();
  //     const finalData = { ...UID, time, ...finalPost };

  //     fetch("https://aqueous-springs-11487.herokuapp.com/posts", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(finalData),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data?.insertedId) {
  //           document.location.reload();
  //           document.getElementById("postData").value = "";
  //         }
  //       });
  //   };

  return (
    <div
      style={{
        background: "white",
        padding: "5px",
        borderRadius: "10px",
        marginTop: "10px",
        boxShadow: "1px 1px 5px #ccc",
      }}
      //   style={{ display: view ? "block" : "none" }}
    >
      <div
        style={{ padding: "10px" }}
        //   style={{ display: postType === "text" ? "block" : "none" }}
      >
        <TextField id="postData" label="Post" multiline rows={4} fullWidth />

        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "10px" }}
        >
          <Button
            title="Close"
            // onClick={() => {
            //   handleViewType(false);
            // }}
          >
            {/* Cross Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fd0061"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </Button>
          <Button
            title="Clear"
            onClick={() => {
              document.getElementById("postData").value = "";
            }}
          >
            {/* Trash Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trash-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fd0061"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7h16" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              <path d="M10 12l4 4m0 -4l-4 4" />
            </svg>
          </Button>
          <Button
          // onClick={handlePost}
          >
            Post
          </Button>
        </div>
      </div>
      <div
        style={{ textAlign: "center", padding: "80px", display: "none" }}
        // style={{ display: postType === "others" ? "block" : "none" }}
      >
        Coming Soon...
        <Button
          title="Close"
          //   onClick={() => {
          //     handleViewType(false);
          //   }}
        >
          {/* Cross Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fd0061"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default NewPostBox;

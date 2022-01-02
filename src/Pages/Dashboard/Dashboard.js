import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Dashboard = () => {
  const users = [
    {
      name: "Test",
      image:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
    },
    {
      name: "Test",
      image:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
    },
    {
      name: "Test",
      image:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
    },
    {
      name: "Test",
      image:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
    },
    {
      name: "Test",
      image:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
    },
    {
      name: "Test",
      image:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
    },
    {
      name: "Test",
      image:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
    },
    {
      name: "Test",
      image:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
    },
    {
      name: "Test",
      image:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
    },
    {
      name: "Test",
      image:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
    },
  ];
  const posts = [
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/3e/e6/d5/3ee6d5fff635d4e68222614eba8bfda6.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/e1/85/b5/e185b59733466431da3ea1e068afe5c3.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/b4/65/d0/b465d0bfe0614448ed4671620c086bc1.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/ce/4d/62/ce4d627c4833295fa6495711aa2d81ec.png",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/25/d1/d0/25d1d084cf793727fbb572fdee082087.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/ab/1c/24/ab1c24275f14fe69a4ab5e87330f6846.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/81/18/b3/8118b30351f4930594a45f5555b4c1b3.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/5a/e5/c8/5ae5c82931566790bc394a7089124d47.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/11/bf/2e/11bf2ed289e0f2d79559914f3e20e9da.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/564x/f9/f6/5f/f9f65f33bf40fe6ae0c6ea867339015e.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/3e/e6/d5/3ee6d5fff635d4e68222614eba8bfda6.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/e1/85/b5/e185b59733466431da3ea1e068afe5c3.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/b4/65/d0/b465d0bfe0614448ed4671620c086bc1.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/ce/4d/62/ce4d627c4833295fa6495711aa2d81ec.png",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/25/d1/d0/25d1d084cf793727fbb572fdee082087.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/ab/1c/24/ab1c24275f14fe69a4ab5e87330f6846.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/81/18/b3/8118b30351f4930594a45f5555b4c1b3.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/5a/e5/c8/5ae5c82931566790bc394a7089124d47.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/11/bf/2e/11bf2ed289e0f2d79559914f3e20e9da.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/564x/f9/f6/5f/f9f65f33bf40fe6ae0c6ea867339015e.jpg",
    },
  ];

  return <div>fckd up</div>;
};

export default Dashboard;

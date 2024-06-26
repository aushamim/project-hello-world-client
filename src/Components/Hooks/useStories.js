import { useEffect, useState } from "react";

const useStories = () => {
  const [storiesData, setStoriesData] = useState([]);

  useEffect(() => {
    fetch("https://project-hello-world-server.vercel.app/stories")
      .then((res) => res.json())
      .then((data) => data.sort((a, b) => b.time - a.time))
      .then((sortedData) => setStoriesData(sortedData));
  }, []);
  return { storiesData };
};

export default useStories;

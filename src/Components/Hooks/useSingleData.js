import React, { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useSingleData = () => {
  const { user } = useAuth();
  const [singleUser, setSingleUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => data.filter((x) => x.email === user.email))
      .then((newData) => setSingleUser(newData[0]));
  }, [user.email]);
  return { singleUser };
};

export default useSingleData;

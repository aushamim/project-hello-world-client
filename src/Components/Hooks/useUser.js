// import { useEffect, useState } from "react";
// import useAuth from "./useAuth";

// const useUser = () => {
//   const { user } = useAuth();
//   const { userData, setUserData } = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/users?email=${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => setUserData(data));
//   }, [user.email]);

//   return { userData };
// };

// export default useUser;

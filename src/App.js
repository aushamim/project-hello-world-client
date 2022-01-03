import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Components/ContextApi/AuthProvider/AuthProvider";
import User from "./Pages/User/User";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/Login/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/user" element={<User></User>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/admin" element={<Dashboard></Dashboard>}></Route>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home></Home>
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

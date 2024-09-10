import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "./Login";
import Register from "./Register";
import Create from "./Create";
import PrivateError from "../components/Axios/privateError";

const Pages = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const location = useLocation();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [location, token]);

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<Register />}/>
      <Route path="/login" element={<Login />}/>

      {isLoggedIn && (
        <Route path="/create" element={<Create />}/>
      )}

      {!isLoggedIn && (
        <Route path="/create" element={<PrivateError />}/>
      )}
 
    </Routes>
    </>
  )  
}

export default Pages
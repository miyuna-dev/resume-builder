import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom"

const Home = () => {
   return (
      <>
         <Header />
         <Main className="body container">
            <Link to="/create" className="heading">Create your resume</Link>
         </Main>
      </> 
   )  
}

const Main = styled.div``
const Button = styled.button``
 
 export default Home
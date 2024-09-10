import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
import AuthService from "../components/Axios/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Info from "../assets/infos.svg"

const required = (value) => {
   if (!value) {
      return (
         <div className="error">
            This field is required.
         </div>
      );
   };
};

const Login = () => {
   const navigate = useNavigate();
   const form = useRef();

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [message, setMessage] = useState("");
   const [loading, setLoading] = useState(false);
   const [login, setLogin] = useState(false);

   const handleEmail = (event) => {
      setEmail(event.target.value);
   };

   const handlePassword = (event) => {
      setPassword(event.target.value);
   };
   
   const handleSubmit = (event) => {
      event.preventDefault();

      setMessage("");
      setLoading(true);

      form.current.validateAll();

         AuthService.login(email, password).then(
            (response) => {
               localStorage.setItem("token", JSON.stringify(response.data.accessToken));
               setLogin(true);
               setTimeout(() => {
                  navigate("/")
               }, 500)
            },
            (error) => {
               const resMessage = (
                  error.response && error.response.data && error.response.data.message
               ) || error.message || error.toString();

               setMessage(resMessage);
               setLoading(false);
            }
         );
      }

   if (!login) {
      return (
         <div id="login" className="login">
            <div className="container">
               <div className="div"><h1>Log onto your account</h1></div>
               <Form className="form" onSubmit={handleSubmit} ref={form}>
                  
                  {message && (
                     <small className="alert alert-success" role="alert" >
                        {message}
                     </small>
                  )}

                  <div className="form-group">
                     <Input 
                        type="text" 
                        className="form-input" 
                        placeholder="Email"
                        name="email"
                        value={email} 
                        onChange={handleEmail} 
                        validations={[required]}
                     />
                  </div>
                  <div className="form-group">
                     <Input 
                        type="text" 
                        className="form-input" 
                        placeholder="Password"
                        name="password"
                        value={password} 
                        onChange={handlePassword} 
                        validations={[required]}
                     />
                  </div>
                  <div className="auth">
                     <button 
                        type="submit" 
                        className="btn btn-submit" 
                        disabled={loading}
                     >
                        Register
                     </button>
                  </div>

               </Form>

               <div className="account">
                  <span>Don't have an account?</span>
                  <Link to="/signup">Sign up</Link>
               </div>

               <div className="infos">
                  <img src={Info} alt="Resume" />
               </div>
            </div>
         </div>
      )
   }
}
 
 export default Login
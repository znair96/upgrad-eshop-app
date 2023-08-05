import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, TextField, Typography } from "@mui/material";
import "./login-signup.css";
const SignUp = () => {
  return (
    <>
      <div className="sign-in__container" style={{
        marginTop: 40, marginBottom:96,
      }}>
        <div className="sign-in__logo">
          <div className="logo">
            <LockOutlinedIcon />
          </div>
          <Typography variant="h5">Sign Up</Typography>
        </div>
        <form className="login-form">


          
        <TextField
            id="outlined-password-input"
            label="First Name *"
            type="text"
          />
               
          <TextField
            id="outlined-password-input"
            label="Last Name *"
            type="text"
          />


          <TextField
            id="outlined-password-input"
            label="Email Address *"
            type="email"
          />


          <TextField
            id="outlined-password-input"
            label="Password *"
            type="password"
          />

<TextField
            id="outlined-password-input"
            label=" Confirm Password *"
            type="password"
          />
  
<TextField
            id="outlined-password-input"
            label=" Contact Number*"
            type="number"
          />

          
          <Button variant="contained">Sign Up</Button>
        </form>
          <a href="something.com">Don't have an account? Sign Up</a>
      </div>
    </>
  );
};

export default SignUp;

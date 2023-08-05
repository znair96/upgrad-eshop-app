import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, TextField, Typography } from "@mui/material";
import "./login-signup.css";
const SignIn = () => {
  return (
    <>
      <div className="sign-in__container">
        <div className="sign-in__logo">
          <div className="logo">
            <LockOutlinedIcon />
          </div>
          <Typography variant="h5">Sign in</Typography>
        </div>
        <form className="login-form">
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
          <Button variant="contained">Sign In</Button>
        </form>
          <a href="something.com">Don't have an account? Sign Up</a>
      </div>
    </>
  );
};

export default SignIn;

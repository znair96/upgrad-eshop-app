import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, TextField, Typography } from "@mui/material";
import "./login-signup.css";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
            inputProps={{
              autoComplete: "off",
            }}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <TextField
            id="outlined-password-input"
            label="Password *"
            type="password"
            inputProps={{
              autoComplete: "off",
            }}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button variant="contained">Sign In</Button>
        </form>
        <a
          href="something.com"
          style={{
            position: "absolute",
            left: 6,
          }}
        >
          Don't have an account? Sign Up
        </a>
      </div>
    </>
  );
};

export default SignIn;

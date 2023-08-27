import React, { useEffect, useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import "./login-signup.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../reducers/userReducer";
import { useNavigate } from "react-router-dom";
const SignIn = ({ open, setOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/products");
    }
  }, [isLoggedIn]);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const logInHandler = async () => {
    const response = await axios.post("http://localhost:8080/api/auth/signin", {
      username,
      password,
    });
    console.log(response.data);
    dispatch(signIn(response.data));
    navigate("/products");
  };
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
          <Button variant="contained" onClick={logInHandler}>
            Sign In
          </Button>
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
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "right", vertical: "top" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            User Registered Successfully
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default SignIn;

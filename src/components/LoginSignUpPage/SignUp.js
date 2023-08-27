import React, { useState, useEffect } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import "./login-signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = ({ open, setOpen }) => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [error, setError] = useState(false);
  const [data, setData] = useState("");
  // const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const navigate = useNavigate();
  const saveFormData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          email: signUpData.email,
          role: ["user"],
          password: signUpData.password,
          firstName: signUpData.firstName,
          lastName: signUpData.lastName,
          contactNumber: signUpData.phone,
        }
      );
      setData(response.data);
      setOpen(true);
    } catch (error) {
      setError(true);
      navigate("/signup");
      console.log(error);
    }
  };
  const onHandleSubmit = (event) => {
    event.preventDefault();
    // debugger;
    if (signUpData.password === signUpData.confirmPassword) {
      saveFormData();
      navigate("/");
    } else {
      navigate("/signup");
      handleClick();
    }
  };
  const onChangeHandler = (event) => {
    setSignUpData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <>
      <div
        className="sign-in__container"
        style={{
          marginTop: 40,
          marginBottom: 96,
        }}
      >
        <div className="sign-in__logo">
          <div className="logo">
            <LockOutlinedIcon />
          </div>
          <Typography variant="h5">Sign Up</Typography>
        </div>
        <form className="login-form" onSubmit={onHandleSubmit}>
          <TextField
            id="outlined-password-input"
            label="First Name *"
            type="text"
            name="firstName"
            onChange={onChangeHandler}
            value={signUpData.firstName}
          />

          <TextField
            id="outlined-password-input"
            label="Last Name *"
            type="text"
            name="lastName"
            onChange={onChangeHandler}
            value={signUpData.lastName}
          />

          <TextField
            id="outlined-password-input"
            label="Email Address *"
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={signUpData.email}
          />

          <TextField
            id="outlined-password-input"
            label="Password *"
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={signUpData.password}
          />

          <TextField
            id="outlined-password-input"
            label="Confirm Password *"
            type="password"
            name="confirmPassword"
            onChange={onChangeHandler}
            value={signUpData.confirmPassword}
          />

          <TextField
            id="outlined-password-input"
            label="Contact Number*"
            type="number"
            name="phone"
            onChange={onChangeHandler}
            value={signUpData.phone}
          />

          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          {!error ? (
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Signed Up Successfully
            </Alert>
          ) : (
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Please verify your credentials again
            </Alert>
          )}
        </Snackbar>
        <a href="something.com">Don't have an account? Sign Up</a>
      </div>
    </>
  );
};

export default SignUp;

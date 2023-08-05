import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div class="navigation__brand-logo">
        <ShoppingCartIcon />
        <Typography>upGrad E-Shop</Typography>
      </div>
      <div class="navigation__menu">
        <a href="/google.com">Login</a>
        <a href="/facebook.com">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;

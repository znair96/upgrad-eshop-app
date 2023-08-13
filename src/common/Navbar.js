import React, { Fragment } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <Fragment>
      <nav>
        <div class="navigation__brand-logo">
          <ShoppingCartIcon />
          <Typography>upGrad E-Shop</Typography>
        </div>
        <div class="navigation__menu">
          <Link to="/">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
      <Outlet/>
    </Fragment>
  );
};

export default Navbar;

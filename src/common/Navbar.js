import React, { Fragment } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../reducers/userReducer";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "40ch",
      "&:focus": {
        width: "42ch",
      },
    },
  },
}));
const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <nav>
        <div class="navigation__brand-logo">
          <ShoppingCartIcon />
          <Typography>upGrad E-Shop</Typography>
        </div>
        {isLoggedIn && (
          <div>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>
        )}
        <div class="navigation__menu">
          {!isLoggedIn ? (
            <>
              <Link to="/">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          ) : user.roles[0] === "ADMIN" ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/add-product">Add Product</Link>
              <Link to="/">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#F50157",
                  }}
                  onClick={() => {
                    dispatch(signOut());
                    localStorage.removeItem("x-auth-token");
                  }}
                >
                  Log Out
                </Button>
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;

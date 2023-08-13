import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import Select from "react-select";
import "./add-modify-product.css";
import { categoryList } from "./category";
const AddProduct = () => {
  const [categoryOption, selectCategoryOption] = useState("");
  const onChangeHandler = (e) => {
    selectCategoryOption(e.value);
  };
  const selectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
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
          <Typography variant="h5">Add Product</Typography>
        </div>
        <form className="login-form">
          <TextField id="outlined-password-input" label="Name *" type="text" />
          <Select
            defaultValue={""}
            name="category"
            options={categoryList}
            onChange={onChangeHandler}
            // value={sortOption}
            isSearchable={true}
            // className="react-list-container"
            // classNamePrefix="react-select"
            styles={selectStyles}
          />
          <TextField
            id="outlined-password-input"
            label="Manufacturer *"
            type="text"
          />

          <TextField
            id="outlined-password-input"
            label="Available Items *"
            type="text"
          />

          <TextField
            id="outlined-password-input"
            label="Price *"
            type="number"
          />

          <TextField
            id="outlined-password-input"
            label="Image URL *"
            type="url"
          />

          <TextField
            id="outlined-password-input"
            label="Product Description *"
            type="text"
          />

          <Button variant="contained">Save Product</Button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;

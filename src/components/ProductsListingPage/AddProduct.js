import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import Select from "react-select";
import "./add-modify-product.css";
import { categoryList } from "./category";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useSelector } from "react-redux";
const AddProduct = () => {
  const [categoryOption, selectCategoryOption] = useState("");
  const accessToken = useSelector((state) => state.user.user.token);
  const onCategoryChangeHandler = (e) => {
    selectCategoryOption(e.value);
  };
  const selectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };
  const [addProductData, setAddProductData] = useState({
    name: "",
    manufacturer: "",
    availableItems: "",
    password: "",
    price: "",
    imageURL: "",
    productDescription: "",
  });
  const onSubmitAddHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/products",
        {
          id: uuidv4(),
          name: addProductData.name,
          category: categoryOption,
          price: addProductData.price,
          description: addProductData.productDescription,
          manufacturer: addProductData.manufacturer,
          availableItems: addProductData.availableItems,
          imageUrl: addProductData.imageURL,
          dateCreated: Date(),
          lastUpdated: Date(),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeHandler = (event) => {
    setAddProductData((prevState) => {
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
          <Typography variant="h5">Add Product</Typography>
        </div>
        <form className="login-form" onSubmit={onSubmitAddHandler}>
          <TextField
            id="outlined-password-input"
            label="Name *"
            type="text"
            name="name"
            value={addProductData.name}
            onChange={onChangeHandler}
          />
          <Select
            defaultValue={""}
            name="category"
            options={categoryList}
            onChange={onCategoryChangeHandler}
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
            name="manufacturer"
            value={addProductData.manufacturer}
            onChange={onChangeHandler}
          />

          <TextField
            id="outlined-password-input"
            label="Available Items *"
            type="text"
            name="availableItems"
            value={addProductData.availableItems}
            onChange={onChangeHandler}
          />

          <TextField
            id="outlined-password-input"
            label="Price *"
            type="number"
            name="price"
            value={addProductData.price}
            onChange={onChangeHandler}
          />

          <TextField
            id="outlined-password-input"
            label="Image URL *"
            type="url"
            name="imageURL"
            value={addProductData.imageURL}
            onChange={onChangeHandler}
          />

          <TextField
            id="outlined-password-input"
            label="Product Description *"
            type="text"
            name="productDescription"
            value={addProductData.productDescription}
            onChange={onChangeHandler}
          />

          <Button variant="contained" type="submit">
            Save Product
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;

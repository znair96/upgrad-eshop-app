import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import Select from "react-select";
import "./add-modify-product.css";
import { categoryList } from "./category";
import { useParams } from "react-router-dom";
import axios from "axios";
const ModifyProduct = () => {
  const [categoryOption, selectCategoryOption] = useState("");
  const onChangeHandler = (e) => {
    selectCategoryOption(e.value);
  };
  const selectStyles = {
    menu: (base) => ({
      ...base,
      zIndex: 100,
      textTransform: "capitalize",
    }),
  };
  const { productId } = useParams();
  const [addProductData, setAddProductData] = useState({
    name: "",
    manufacturer: "",
    availableItems: "",
    password: "",
    price: "",
    imageURL: "",
    productDescription: "",
  });
  useEffect(() => {
    const getProductData = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/api/products/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("x-auth-token"),
          },
        }
      );
      setAddProductData({
        name: data.name,
        manufacturer: data.manufacturer,
        availableItems: data.availableItems,
        password: "",
        price: data.price,
        imageURL: data.imageUrl,
        productDescription: data.description,
      });
      selectCategoryOption(data.category);
    };
    getProductData();
  }, [productId]);
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
          <Typography variant="h5">Modify Product</Typography>
        </div>
        <form className="login-form">
          <TextField
            id="outlined-password-input"
            label="Name *"
            type="text"
            value={addProductData.name}
            onChange={onChangeHandler}
          />
          <Select
            // defaultValue={{ label: categoryOption, value: categoryOption }}
            name="category"
            options={categoryList}
            onChange={onChangeHandler}
            value={{ label: categoryOption, value: categoryOption }}
            isSearchable={true}
            styles={selectStyles}
          />
          <TextField
            id="outlined-password-input"
            label="Manufacturer *"
            type="text"
            value={addProductData.manufacturer}
            onChange={onChangeHandler}
          />

          <TextField
            id="outlined-password-input"
            label="Available Items *"
            type="text"
            value={addProductData.availableItems}
            onChange={onChangeHandler}
          />

          <TextField
            id="outlined-password-input"
            label="Price *"
            type="number"
            value={addProductData.price}
            onChange={onChangeHandler}
          />

          <TextField
            id="outlined-password-input"
            label="Image URL *"
            type="url"
            value={addProductData.imageURL}
            onChange={onChangeHandler}
          />

          <TextField
            id="outlined-password-input"
            label="Product Description *"
            type="text"
            value={addProductData.productDescription}
            onChange={onChangeHandler}
          />

          <Button variant="contained">Modify Product</Button>
        </form>
      </div>
    </>
  );
};

export default ModifyProduct;

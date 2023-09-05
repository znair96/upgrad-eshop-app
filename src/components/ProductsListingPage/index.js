import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./product-listing.css";
import Select from "react-select";
import ProductCard from "./ProductCard";
import axios from "axios";
const sortList = [
  { value: "default", label: "Default" },
  { value: "pricehightolow", label: "Price: High to Low" },
  { value: "pricelowtohigh", label: "Price: Low to High" },
  { value: "newest", label: "Newest" },
];
const ProductsListingPage = () => {
  const [category, setCategory] = useState("all");
  const [sortOption, selectSortOption] = useState("");
  const [productList, setProductList] = useState([]);
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const onChangeHandler = (e) => {
    selectSortOption(e.value);
  };
  console.log(sortOption);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8080/api/products", {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("x-auth-token"),
        },
      });
      setProductList(response.data);
    };
    fetchData();
    console.log(productList);
  }, []);
  return (
    <>
      <div className="toggle-category-button-container">
        <ToggleButtonGroup value={category} exclusive onChange={handleChange}>
          <ToggleButton value="all">ALL</ToggleButton>
          <ToggleButton value="apparel">APPAREL</ToggleButton>
          <ToggleButton value="electronics">ELECTRONICS</ToggleButton>
          <ToggleButton value="footwear">FOOTWEAR</ToggleButton>
          <ToggleButton value="personal care">PERSONAL CARE</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="product-listing-cards-container">
        <div className="sort-products">
          <Select
            defaultValue={""}
            name="color"
            options={sortList}
            onChange={onChangeHandler}
            // value={sortOption}
            isSearchable={false}
            className="react-list-container"
            classNamePrefix="react-select"
          />
        </div>
        <div className="product-card-list">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            alignItems={"stretch"}
            rowSpacing={6}
          >
            {productList.map((product, index) => (
              <>
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  key={index}
                  // style={{ display: "flex" }}
                >
                  <ProductCard product={product} />
                </Grid>
              </>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ProductsListingPage;

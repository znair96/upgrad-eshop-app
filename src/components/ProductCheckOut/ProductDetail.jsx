import React,{useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

function ProductDetail(){
    const [productList,setProductList] =useState([]);
    console.log(productList);
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products/1");
        const data = await response.json();
        setProductList(data);
      };
    return(
            <Grid container spacing={2} justify = "center">
            <Grid item xs={4}>
                <h1>xs=8</h1>
            </Grid>
            <Grid item xs={4}>
                <h1>xs=4</h1>
            </Grid>
        </Grid>
    )
}
export default ProductDetail;
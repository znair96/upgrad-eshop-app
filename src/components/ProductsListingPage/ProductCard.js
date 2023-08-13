import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const ProductCard = ({ product }) => {
  const { image, title, description, price } = product;
  return (
    <Card
      sx={{ maxWidth: 400, minHeight: 450 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        // position: "relative",
      }}
    >
      <CardMedia sx={{ height: 224 }} image={image} title={title} />
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Rs.{price}
          </Typography>
        </div>

        <Typography
          variant="body2"
          c400olor="text.secondary"
          style={{
            minHeight: "120px",
            maxHeight: "120px",
            overflowY: "scroll",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        // style={{
        //   position: "absolute",
        //   bottom: 0,
        // }}
      >
        <Button size="small" variant="contained">
          BUY
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

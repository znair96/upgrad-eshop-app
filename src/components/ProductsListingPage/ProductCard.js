import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
const ProductCard = ({ product }) => {
  const { image, title, description, price } = product;
  const userRole = useSelector((state) => state.user.user.roles[0]);
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
      <CardMedia
        sx={{ height: 224, objectFit: "contain" }}
        image={image}
        title={title}
        style={{
          backgroundSize: "contain",
        }}
      />
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
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <>
          <Button size="small" variant="contained">
            BUY
          </Button>
          {userRole === "ADMIN" && (
            <div
              style={{
                display: "flex",
                gap: 12,
              }}
            >
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </div>
          )}
        </>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

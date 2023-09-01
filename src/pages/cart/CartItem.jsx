import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import { useContext } from "react";
import "./cartitem.css";

import { ShopContext } from "../../context/shop-context";

export default function CartItem({ title, price, brand, thumbnail, id }) {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: { xs: "auto", sm: "initial" },
      }}
    >
      <Card
        orientation="horizontal"
        sx={{
          width: "100%",
          flexWrap: "wrap",
          [`& > *`]: {
            "--stack-point": "500px",
            minWidth:
              "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
          },
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img src={thumbnail} loading="lazy" alt="" />
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {brand}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            {title}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            ${price}
          </Typography>

          <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
            <Button
              onClick={() => removeFromCart(id)}
              variant="outlined"
              color="neutral"
            >
              Remove
            </Button>
            <input
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
              value={cartItems[id]}
            />
            <Button
              onClick={() => addToCart(id)}
              variant="solid"
              color="primary"
            >
              Add
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

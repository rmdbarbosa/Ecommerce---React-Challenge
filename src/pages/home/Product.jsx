import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { ShopContext } from "../../context/shop-context";

export default function Product({
  title,
  price,
  brand,
  thumbnail,
  stock,
  rating,
  id,
}) {
  const { addToCart, cartItems } = React.useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img src={thumbnail} alt={title} />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{brand}</Typography>
        <Link
          href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
        >
          {title}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              In stock
            </Chip>
          }
        >
          ${price}
        </Typography>
        <Typography level="body-sm">
          (Only <b>{stock}</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button
          onClick={() => addToCart(id)}
          variant="solid"
          color="primary"
          size="lg"
        >
          Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </Button>
      </CardOverflow>
    </Card>
  );
}

import React from "react";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "@mui/joy/Button";

export default function Cart() {
  const { products, cartItems, getTotalCartAmount } =
    React.useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <>
      <h1>Your Cart Items</h1>
      <hr />
      <div className="cart__container">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={products.id} {...product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="total__container">
          <p>Total: $ {totalAmount}</p>
          <div className="cart__button__container">
            <Button onClick={() => navigate("/")}> Continue Shopping </Button>
            <Link to={"/checkout"}>
              <Button> Checkout </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="empty__cart">
          <h1>Your cart is empty</h1>
          <Link to="/">
            <Button>Continue shopping</Button>
          </Link>
        </div>
      )}
    </>
  );
}

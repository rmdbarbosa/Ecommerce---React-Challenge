import React from "react";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Cart() {
  const { products, cartItems, getTotalCartAmount } =
    React.useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <>
      <h1>Your Cart Items</h1>
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
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <Link to={"/checkout"}>
            <button>Checkout</button>
          </Link>
        </div>
      ) : (
        <h1>Empty Cart</h1>
      )}
    </>
  );
}

import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function CartPage() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <>
      <p>Cart page here</p>
    </>
  );
}

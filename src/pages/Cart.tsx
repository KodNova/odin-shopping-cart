import CartItemContainer from "../components/CartItemContainer";
import Header from "../components/Header";
import useCartContext from "../hooks/useCartContext";

export default function CartPage() {
  const { getCartTotal } = useCartContext();
  return (
    <>
      <Header />
      <CartItemContainer />
      <p>Total price: €{getCartTotal().toFixed(2)} </p>
    </>
  );
}

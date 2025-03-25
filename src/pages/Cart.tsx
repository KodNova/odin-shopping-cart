import Header from "../componets/Header";
import useCartContext from "../hooks/useCartContext";

export default function CartPage() {
  const { cartItems } = useCartContext();
  console.log(cartItems);
  return (
    <>
      <Header />
      <p>Cart page here</p>
    </>
  );
}

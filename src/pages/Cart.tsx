import useCartContext from "../hooks/useCartContext";

export default function CartPage() {
  const { cartItems } = useCartContext();
  console.log(cartItems);
  return (
    <>
      <p>Cart page here</p>
    </>
  );
}

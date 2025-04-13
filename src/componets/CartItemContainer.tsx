import useCartContext from "../hooks/useCartContext";
import { CartItem } from "../types";
import CartItemCard from "./CartItemCard";

export default function CartItemContainer() {
  const { cartItems, addToCart, decreaseQuantity } = useCartContext();
  if (cartItems.length < 1)
    return (
      <>
        <p>You have nothing in your cart.</p>
      </>
    );

  return (
    <div className="flex gap-4">
      {cartItems.map((item: CartItem) => (
        <CartItemCard
          key={item.id}
          item={item}
          addToCart={addToCart}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
    </div>
  );
}

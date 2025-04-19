import useCartContext from "../hooks/useCartContext";
import { CartItem } from "../types";
import CartItemCard from "./CartItemCard";

export default function CartItemContainer() {
  const { cartItems, addToCart, decreaseQuantity } = useCartContext();
  if (cartItems.length < 1)
    return (
      <div className="flex flex-col gap-2 rounded-2xl bg-slate-500 p-5">
        <p>You have nothing in your cart.</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-slate-500 p-5">
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

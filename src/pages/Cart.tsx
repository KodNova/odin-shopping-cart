import Header from "../componets/Header";
import useCartContext from "../hooks/useCartContext";
import { CartItem } from "../types";

export default function CartPage() {
  const { cartItems } = useCartContext();
  console.log(cartItems);
  return (
    <>
      <Header />
      <div className="flex gap-4">
        {cartItems.map((item: CartItem) => (
          <div key={item.id}>
            <img className="w-30" src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>€{item.price}</p>
            <p>quantity: {item.quantity}</p>
            <p>Total: €{item.price * item.quantity}</p>
          </div>
        ))}
      </div>
    </>
  );
}

import Header from "../componets/Header";
import useCartContext from "../hooks/useCartContext";
import { CartItem } from "../types";

export default function CartPage() {
  const { cartItems, decreaseQuantity } = useCartContext();

  if (cartItems.length < 1)
    return (
      <>
        <Header />
        <p>You have nothing in you cart.</p>;
      </>
    );

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
            <button
              className="border-1 border-black p-1"
              onClick={() => decreaseQuantity(item, -item.quantity)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

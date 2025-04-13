import { CartItem, ShopItem } from "../types";

type CartItemCardProps = {
  item: CartItem;
  addToCart: (item: ShopItem, quantity: number) => void;
  decreaseQuantity: (item: CartItem, quantity: number) => void;
};

export default function CartItemCard({
  item,
  addToCart,
  decreaseQuantity,
}: CartItemCardProps) {
  return (
    <div>
      <img className="w-30" src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>€{item.price}</p>
      <div>
        <button onClick={() => decreaseQuantity(item, -1)}>-</button>
        <p>quantity: {item.quantity}</p>
        <button onClick={() => addToCart(item, 1)}>+</button>
      </div>
      <p>Total: €{item.price * item.quantity}</p>
      <button
        className="border-1 border-black p-1"
        onClick={() => decreaseQuantity(item, -item.quantity)}
      >
        Remove
      </button>
    </div>
  );
}

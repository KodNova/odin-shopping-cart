import { Button } from "@/components/ui/button";
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
    <div className="flex items-center justify-between gap-2 rounded-2xl bg-slate-400 p-2">
      <img className="w-30 rounded-lg" src={item.image} alt={item.title} />
      <h3 className="w-3/5 text-center text-2xl">{item.title}</h3>
      <p className="text-2xl">€{item.price.toFixed(2)}</p>
      <div className="flex gap-2">
        <Button className="text-xl" onClick={() => decreaseQuantity(item, -1)}>
          -
        </Button>
        <p className="text-2xl">{item.quantity}</p>
        <Button className="text-xl" onClick={() => addToCart(item, 1)}>
          +
        </Button>
      </div>
      <p className="text-2xl">€{(item.price * item.quantity).toFixed(2)}</p>
      <Button
        className="text-xl"
        onClick={() => decreaseQuantity(item, -item.quantity)}
      >
        Remove
      </Button>
    </div>
  );
}

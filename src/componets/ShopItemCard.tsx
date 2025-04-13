import { useState } from "react";
import { ShopItem } from "../types";

type ShopItemCardProps = {
  item: ShopItem;
  addToCart: (item: ShopItem, quantity: number) => void;
};

export default function ShopItemCard({ item, addToCart }: ShopItemCardProps) {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="w-1/5">
      <img className="w-30" src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>€{item.price.toFixed(2)}</p>
      <div>
        <input
          className="w-10 rounded-3xl bg-amber-100 text-center"
          type="number"
          name="quanity"
          min={1}
          value={quantity}
          onChange={(event) => {
            setQuantity(parseInt(event.target.value, 10));
          }}
        />
        <button
          className="border-1 border-black p-1"
          onClick={() => addToCart(item, quantity)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

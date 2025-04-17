import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ShopItem } from "../types";

type ShopItemCardProps = {
  item: ShopItem;
  addToCart: (item: ShopItem, quantity: number) => void;
};

export default function ShopItemCard({ item, addToCart }: ShopItemCardProps) {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="flex w-1/5 flex-col items-center gap-2 rounded-2xl bg-slate-400 p-2">
      <img className="w-30 rounded-lg" src={item.image} alt={item.title} />
      <h3 className="w-4/5 overflow-hidden text-center text-ellipsis whitespace-nowrap">
        {item.title}
      </h3>
      <p>€{item.price.toFixed(2)}</p>
      <div className="flex gap-2">
        <Input
          type="number"
          name="quanity"
          min={1}
          value={quantity}
          onChange={(event) => {
            setQuantity(parseInt(event.target.value, 10));
          }}
        />
        <Button
          className="active:bg-slate-400"
          variant={"outline"}
          onClick={() => addToCart(item, quantity)}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

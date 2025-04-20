import useCartContext from "../hooks/useCartContext";
import useFetchItems from "../hooks/usefetchItems";
import { ShopItem } from "../types";
import ShopItemCard from "./ShopItemCard";

export default function ShopItemContainer() {
  const items = useFetchItems();
  const { addToCart } = useCartContext();

  if (!items) {
    return <p className="bg-slate-400 text-center text-4xl">Loading...</p>;
  }

  return (
    <>
      <div className="grid gap-4 md:flex md:justify-center">
        {items.map((item: ShopItem) => (
          <ShopItemCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

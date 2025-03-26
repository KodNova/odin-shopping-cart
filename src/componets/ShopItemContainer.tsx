import useCartContext from "../hooks/useCartContext";
import useFetchItems from "../hooks/usefetchItems";
import { ShopItem } from "../types";
import ShopItemCard from "./ItemCard";

export default function ShopItemContainer() {
  const items = useFetchItems();
  const { addToCart } = useCartContext();

  if (!items) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex">
        {items.map((item: ShopItem) => (
          <ShopItemCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

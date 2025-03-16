import useFetchItems from "../hooks/usefetchItems";
import { ShopItem } from "../types";

export default function ShopItemContainer() {
  const items = useFetchItems();

  if (!items) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex">
        {items.map((item: ShopItem) => (
          <div className="w-1/5" key={item.id}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <img className="w-30" src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

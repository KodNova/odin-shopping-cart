import useFetchItems from "../hooks/usefetchItems";

export default function ShopItemContainer() {
  const ShopItemData = useFetchItems();
  console.log(ShopItemData);
  return <p>Shop Items</p>;
}

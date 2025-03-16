import { useEffect, useState } from "react";
import { ShopItem } from "../types.ts";

export default function useFetchItems(): ShopItem[] | undefined {
  const [ShopItemData, setShopItemData] = useState<ShopItem[]>();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing",
      );
      const data = await response.json();
      setShopItemData(data);
    };
    fetchItems();
  }, []);

  return ShopItemData;
}

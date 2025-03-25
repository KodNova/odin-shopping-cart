import { createContext, useState } from "react";
import { CartItem, ShopItem } from "../types";

type CartContext = {
  cartItems: CartItem[];
  addToCart: (item: ShopItem, quantity: number) => void;
};

type CartContextProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContext>({
  cartItems: [],
  addToCart: () => {},
});

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: ShopItem, quantity: number) => {
    const newItem: CartItem = { ...item, quantity };
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems, newItem];
      return newCartItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

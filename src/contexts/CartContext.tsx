import { createContext, useState } from "react";
import { CartItem } from "../types";

type CartContext = {
  cartItems: CartItem[];
  addToCart: () => void;
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

  const addToCart = () => {
    console.log("added item to cart.");
    setCartItems(cartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

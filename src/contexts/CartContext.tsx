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

  // addToCart helper 1
  const checkIfItemExist = (newItem: ShopItem): boolean =>
    cartItems.some((item) => newItem.id === item.id);

  // addToCart helper 2
  const updateExistingItemQuanity = (
    itemToUpdate: ShopItem,
    quantityToAdd: number,
  ): CartItem[] => {
    return cartItems.map((cartItem: CartItem) =>
      cartItem.id === itemToUpdate.id
        ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
        : cartItem,
    );
  };

  // addToCart helper 3
  const addNewItemToCart = (
    itemToAdd: ShopItem,
    quantity: number,
  ): CartItem[] => {
    const newItem: CartItem = { ...itemToAdd, quantity };
    return [...cartItems, newItem];
  };

  // add to cart function
  const addToCart = (item: ShopItem, quantity: number) => {
    checkIfItemExist(item)
      ? setCartItems(updateExistingItemQuanity(item, quantity))
      : setCartItems(addNewItemToCart(item, quantity));
  };

  // const removeFromCart = (item:CartItem) => {
  //   if checkIfItemExist(item) {
  //     updateExistingItemQuanity()
  //   }
  // }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

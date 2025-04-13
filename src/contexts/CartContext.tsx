import { createContext, useState } from "react";
import { CartItem, ShopItem } from "../types";

type CartContext = {
  cartItems: CartItem[];
  addToCart: (item: ShopItem, quantity: number) => void;
  decreaseQuantity: (item: CartItem, quantity: number) => void;
};

type CartContextProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContext>({
  cartItems: [],
  addToCart: () => {},
  decreaseQuantity: () => {},
});

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // helper 1
  const checkIfItemExist = (newItem: ShopItem): boolean =>
    cartItems.some((item) => newItem.id === item.id);

  // helper 2
  const updateExistingItemQuanity = (
    itemToUpdate: ShopItem,
    quantityDiff: number,
  ): CartItem[] => {
    const updatedCart: CartItem[] = cartItems.map((cartItem: CartItem) =>
      cartItem.id === itemToUpdate.id
        ? { ...cartItem, quantity: cartItem.quantity + quantityDiff }
        : cartItem,
    );

    return updatedCart.filter((item: CartItem) => item.quantity > 0);
  };

  // helper 3
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

  const decreaseQuantity = (item: CartItem, quantity: number) => {
    if (checkIfItemExist(item))
      setCartItems(updateExistingItemQuanity(item, quantity));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

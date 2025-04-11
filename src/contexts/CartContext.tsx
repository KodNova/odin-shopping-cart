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
    currentCart: CartItem[],
    itemToUpdate: ShopItem,
    quantityToAdd: number,
  ): CartItem[] => {
    return currentCart.map((cartItem: CartItem) =>
      cartItem.id === itemToUpdate.id
        ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
        : cartItem,
    );
  };

  // addToCart helper 3
  const addNewItemToCart = (
    currentCart: CartItem[],
    itemToAdd: ShopItem,
    quantity: number,
  ): CartItem[] => {
    const newItem: CartItem = { ...itemToAdd, quantity };
    return [...currentCart, newItem];
  };

  // add to cart function
  const addToCart = (item: ShopItem, quantity: number) => {
    checkIfItemExist(item)
      ? setCartItems(updateExistingItemQuanity(cartItems, item, quantity))
      : setCartItems(addNewItemToCart(cartItems, item, quantity));
    console.log("addToCart ran");
    console.log(cartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

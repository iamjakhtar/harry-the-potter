import { CartItem } from "../types/CartItem";

export const calculateCartTotal = (cartItems: CartItem[]): number => {
  return cartItems.reduce(
    (total, nextItem) => total + nextItem.quantity * nextItem.price,
    0
  );
};

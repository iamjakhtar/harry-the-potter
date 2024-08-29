import { CartItem } from "./CartItem";

export interface Cart {
  isCartOpen: boolean;
  cartItems: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeCartItem: (id: number) => void;
  toggleCart: () => void;
}
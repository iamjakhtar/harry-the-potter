import { CartItem } from "../types/CartItem";
import { calculateCartTotal } from "./calculateCartTotal";

export const calculateDiscount = (cartItems: CartItem[]): string => {
    let discount = 0;
    const cartTotal = calculateCartTotal(cartItems);

    switch (cartItems.length) {
      case 1:
        discount = cartTotal * 0.05;
        break;
      case 2:
        discount = cartTotal * 0.1;
        break;
      case 3:
        discount = cartTotal * 0.15;
        break;
      case 4:
        discount = cartTotal * 0.2;
        break;
      case 5:
        discount = cartTotal * 0.25;
        break;
      default:
        discount = 0;
    }

    return discount.toPrecision(2);
}
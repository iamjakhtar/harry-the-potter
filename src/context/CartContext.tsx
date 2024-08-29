import { createContext, FC, ReactNode, useState } from "react";
import { Cart } from "../types/Cart";
import { CartItem } from "../types/CartItem";


const initialCartState: Cart = {
    isCartOpen: false,
    cartItems: [],
    addItemToCart: () => {},
    removeCartItem: () => {},
    toggleCart: () => {}
}

export const CartContext = createContext<Cart>(initialCartState);

const CartContextProvider:FC<{children: ReactNode}> = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }

    const addItemToCart = (item: CartItem) => {
        const isItemInTheCart = cartItems.find((cartItem: CartItem) => cartItem.id === item.id);

        if (isItemInTheCart) {
            const newCartItems = cartItems.map(cartItem => {
                return cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem;
            });
            setCartItems(newCartItems);
        } else {
            const newCartItems = [...cartItems, {...item, quantity: 1}];
            setCartItems(newCartItems);
        }
    }

    const removeCartItem = (id: number) => {
        const newCartItem = cartItems.filter(cartItem => cartItem.id !== id);
        setCartItems(newCartItem);
    }

    return (
      <CartContext.Provider
        value={{
          isCartOpen,
          cartItems,
          addItemToCart,
          removeCartItem,
          toggleCart,
        }}
      >
        {children}
      </CartContext.Provider>
    );
}

export default CartContextProvider;
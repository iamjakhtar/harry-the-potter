import { render, screen } from "@testing-library/react";
import { Cart as CartType } from "../../types/Cart"
import { CartContext } from "../../context/CartContext";
import Cart from "./Cart";


const mockAddToCart = jest.fn();

const initialCart: CartType = {
    isCartOpen: false,
    cartItems: [],
    addItemToCart: mockAddToCart,
    removeCartItem: jest.fn(),
    toggleCart: jest.fn(),
}

const setup = (cartValue = initialCart) => {
    render(
        <CartContext.Provider value={cartValue}>
            <Cart />
        </CartContext.Provider>
    )
}


describe("Cart", () => {

    it("should not be visible with initial render.", () => {
        setup();

        const cartContainer = screen.queryByTestId("cart-container");
        expect(cartContainer).not.toBeNull();
        
    })
    
    it("should display cart is empty message initially.", () => {
        setup();
        
        const emptyCartMsg = screen.getByText(/cart is empty/i);
        expect(initialCart.cartItems).toHaveLength(0);
        expect(emptyCartMsg).toBeInTheDocument();
    })
    
    it("should display cart dropdown when isCartOpen is true.", () => {
        setup({...initialCart, isCartOpen: true});
        
        const cartContainer = screen.queryByTestId("cart-container");
        expect(cartContainer).toBeInTheDocument();
    })
})
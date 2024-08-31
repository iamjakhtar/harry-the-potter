import { fireEvent, render, screen } from "@testing-library/react";
import { CartContext } from "../../context/CartContext";
import book1Image from "../../data/images/book1.png";
import { Book } from "../../types/Book";
import BookComponent from "./Book";
import { CartItem } from "../../types/CartItem";

describe("BookComponent", () => {

    const mockAddToCart = jest.fn();

    const testBook: Book = {
        id: 1,
        title: "Harry the potter and talking owl",
        price: 8,
        coverImage: `${book1Image}`
    };

    const value = {
        isCartOpen: false,
        cartItems: [],
        addItemToCart: mockAddToCart,
        removeCartItem: jest.fn(),
        toggleCart: jest.fn(),
    } 

    const setup = () => {
         render(
           <CartContext.Provider value={value}>
             <BookComponent book={testBook} />
           </CartContext.Provider>
         );
    }
    
    it("should render correct props", () => {

        setup();

        const bookTitle = screen.getByRole("heading", { name: /harry the potter and talking owl/i});
        const priceText = screen.getByText(/price:/i);
        const bookImage = screen.getByAltText(testBook.title);
        const addToCartButton = screen.getByRole("button", { name: /add to cart/i});
        
        expect(bookTitle).toBeInTheDocument();
        expect(priceText).toBeInTheDocument();
        expect(bookImage).toBeInTheDocument();
        expect(addToCartButton).toBeInTheDocument();
        
    })
    
    it("should call add to cart on button click", () => {
        setup();
        const addToCartButton = screen.getByRole("button", { name: /add to cart/i});
        fireEvent.click(addToCartButton);
        expect(mockAddToCart).toHaveBeenCalledTimes(1);

        const cartItem: CartItem = {...testBook, quantity: 1};
        expect(mockAddToCart).toHaveBeenCalledWith(cartItem);
    })



    
})
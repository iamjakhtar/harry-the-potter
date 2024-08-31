import { render, screen } from "@testing-library/react"
import CartItem from "./CartItem"
import { CartItem as CartItemType} from "../../types/CartItem"

const testCartItem: CartItemType = {
    id: 1,
    title: "Book 1",
    price: 8,
    quantity: 1
}

const setup = () => {
    render(
        <CartItem cartItem={testCartItem}/>
    )
}

describe("CartItem", () => {

    it("should render correctly.", () => {
        setup();

        const cartItemContainer = screen.getByTestId("cart-item-container");
        expect(cartItemContainer).toBeInTheDocument();
    })
    
    it("should render 3 spans with title, price and quantity.", () => {
        setup();

        const title = screen.getByText(/book 1/i);
        const price = screen.getByText(/8/i);
        const qty = screen.getByText("1");

        expect(title).toBeInTheDocument();
        expect(price).toBeInTheDocument();
        expect(qty).toBeInTheDocument();

    }) 
})
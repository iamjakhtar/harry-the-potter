
import { render, screen } from "@testing-library/react";
import BookList from "./BookList";

jest.mock("../../data/collection", () => ({
     collection: [
        {id: 1, title: "Book 1", price: 8, coverImage: "./images/book1.png"},
        {id: 2, title: "Book 2", price: 8, coverImage: "./images/book2.png"},
        {id: 3, title: "Book 3", price: 8, coverImage: "./images/book3.png"},
     ]
}));

describe("BookList", () => {

    it("should render without crashing", () => {
    
        render(<BookList />);

        const bookListContainer = screen.getByTestId("book-list");
        expect(bookListContainer).toBeInTheDocument();
    })

    it("should render correctly with correct number of books", () => {
        
        render(<BookList />);

        const headings = screen.getAllByRole("heading");
        const images = screen.getAllByRole("img");

        expect(headings).toHaveLength(3);
        expect(images).toHaveLength(3);
        
    })
})
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Book } from "../../types/Book";
import "./Book.scss";
import { CartItem } from "../../types/CartItem";
import { truncatString } from "../../utils/truncatString";

const BookComponent = ({ book }: {book: Book}) => {
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = (item: CartItem) => {
    addItemToCart(item);
  }
  return (
    <div className="book-container">
      <img src={book.coverImage} alt={book.title} />
      {/* <h3>{truncatString(book.title, 25)}</h3> */}
      <h3>{book.title}</h3>
      <p>
        <span>Price:</span> 
        <span>€{book.price.toFixed(2)}</span>
      </p>
      <button onClick={() => addToCartHandler({ ...book, quantity: 1 })}>
        add to cart
      </button>
    </div>
  );
}
export default BookComponent;
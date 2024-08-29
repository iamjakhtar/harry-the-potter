import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Book } from "../../types/Book";
import "./Book.scss";
import { CartItem } from "../../types/CartItem";

const BookComponent = ({ book }: {book: Book}) => {
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandler = (item: CartItem) => {
    addItemToCart(item);
  }
  return (
    <div className="book-container">
        <img src={book.coverImage} alt={book.title} />
        <h3>{book.title}</h3>
        <p>Price: {book.price.toFixed(2)}</p>
        <button onClick={() => addToCartHandler({...book, quantity: 1})}>ADD To CART</button>
    </div>
  )
}
export default BookComponent;
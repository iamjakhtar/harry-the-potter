import { Book } from "../../types/Book";
import "./Book.scss";

const BookComponent = ({ book }: {book: Book}) => {
  
  return (
    <div className="book-container">
        <img src={book.coverImage} alt={book.title} />
        <h3>{book.title}</h3>
        <p>Price: {book.price.toFixed(2)}</p>
        <button>ADD To CART</button>
    </div>
  )
}
export default BookComponent;
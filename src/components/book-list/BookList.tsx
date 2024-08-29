import { useState } from "react";
import "./BookList.scss";
import { collection } from "../../data/collection";
import BookComponent from "../book/Book";

const BookList = () => {
    const [books, setBooks] = useState(collection);

    const bookListMap = books.map(book => (
        <BookComponent key={book.id} book={book}/>
    ));

  return (
    <div className="book-list-container">
        {
            bookListMap
        }
    </div>
  )
}
export default BookList
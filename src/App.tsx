import "./App.scss";
import BookList from "./components/book-list/BookList";
import Header from "./components/header/Header";

function App() {
  return <div className="App">
    <Header />
    <BookList />
  </div>;
}

export default App;

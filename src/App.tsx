import "./App.scss";
import BookList from "./components/book-list/BookList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  

  return (
    <div className="App">
      <Header />
      <h1>Harry The Potter Collection</h1>
      <BookList />
      <Footer />
    </div>
  );
}

export default App;

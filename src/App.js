import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import BookShelf from "./components/BookShelf";
import SearchPage from "./components/SearchPage";
import SearchBtn from "./components/SearchBtn";
import * as BooksAPI from "./BooksAPI";

function App() {
  const changeShelfHandler = async (event, setShelf, book) => {
    setShelf(event.target.value);
    const res = await BooksAPI.update(book, event.target.value);
    console.log(res);
  };

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, [books]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="list-books">
              <Header />
              <div className="list-books-content">
                <BookShelf
                  title="Currently Reading"
                  label="currentlyReading"
                  changeShelfHandler={changeShelfHandler}
                  books={books}
                />
                <BookShelf
                  title="Want To Read"
                  label="wantToRead"
                  changeShelfHandler={changeShelfHandler}
                  books={books}
                />
                <BookShelf
                  title="Read"
                  label="read"
                  changeShelfHandler={changeShelfHandler}
                  books={books}
                />
              </div>
              <SearchBtn />
            </div>
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              changeShelfHandler={changeShelfHandler}
              shelfBooks={books}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

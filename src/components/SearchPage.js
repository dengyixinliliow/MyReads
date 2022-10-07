import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

function SearchPage({ changeShelfHandler, shelfBooks }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const updateQuery = (query) => {
    setQuery(query);
  };

  useEffect(() => {
    const getBooks = async (query) => {
      const res = await BooksAPI.search(query);
      if (res === undefined || res[0] === undefined) {
        setBooks([]);
      } else {
        for (let i = 0; i < res.length; i++) {
          for (let j = 0; j < shelfBooks.length; j++) {
            if (res[i].id === shelfBooks[j].id) {
              res[i].shelf = shelfBooks[j].shelf;
            }
          }
        }
        setBooks(res);
        console.log(res);
      }
    };

    getBooks(query);
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => navigate("/")}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <Book
                book={book}
                key={book.id}
                changeShelfHandler={changeShelfHandler}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;

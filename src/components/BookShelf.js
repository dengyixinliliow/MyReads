import React, { useEffect, useState } from "react";
import Book from "./Book";

function BookShelf({ title, label, changeShelfHandler, books }) {
  books = books.filter((book) => book.shelf === label);

  return (
    <div>
      <div className="bookshelf-title">{title}</div>
      <div className="bookshelf-books">
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

export default BookShelf;

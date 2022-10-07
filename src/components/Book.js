import { React, useState, useEffect } from "react";

function Book({ book, changeShelfHandler }) {
  const [shelf, setShelf] = useState(book.shelf);
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${
              book.imageLinks !== undefined
                ? book.imageLinks.smallThumbnail
                : ""
            }")`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            onChange={(e) => changeShelfHandler(e, setShelf, book)}
            value={shelf === undefined ? "none" : shelf}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors !== undefined ? book.author : ""}
      </div>
    </div>
  );
}

export default Book;

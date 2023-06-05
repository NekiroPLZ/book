import React from "react";
import DateRead from "./ReadDate";
import BookCard from "./BookCard";
import "./Styles/BookItem.css";
function BookItems({ title, author, dateRead, pageCount }) {
  return (
    <div>
      <BookCard>
        <h2>{title}</h2>
        <h2>{author}</h2>
        <DateRead date={dateRead} />
        <h3>{pageCount}</h3>
      </BookCard>
    </div>
  );
}

export default BookItems;

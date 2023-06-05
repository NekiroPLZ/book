import React from "react";
import "./Styles/BookCard.css";
function BookCard({ children }) {
  return <div className="book-item-container">{children}</div>;
}

export default BookCard;

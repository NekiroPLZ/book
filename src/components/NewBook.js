import React from "react";
import BookForm from "./BookForm";
function NewBook({ newBookSaved }) {
  const saveBookDataHandler = (enteredBookData) => {
    const bookData = {
      id: Math.random(),
      ...enteredBookData,
    };
    newBookSaved(bookData);
  };
  return (
    <div className="new-book">
      <BookForm submitBookData={saveBookDataHandler} />
    </div>
  );
}

export default NewBook;

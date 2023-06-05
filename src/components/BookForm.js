import React, { useState } from "react";
import "./Styles/BookForm.css";
function BookForm({ submitBookData }) {
  const [titleInput, setTitleInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [pageInput, setPageInput] = useState("");
  const [dateRead, setDateRead] = useState("");
  const [buttonForm, setButtonForm] = useState(true);

  const buttonFormHandler = () => {
    setButtonForm(!buttonForm);
  };
  const valueTitleHandler = (event) => {
    setTitleInput(event.target.value);
  };
  const valueAuthorHandler = (event) => {
    setAuthorInput(event.target.value);
  };
  const valuePageHandler = (event) => {
    setPageInput(event.target.value);
  };

  const dateReadHandler = (event) => {
    setDateRead(event.target.value);
  };
  const submitButtonHandler = (e) => {
    e.preventDefault();
    const bookData = {
      title: titleInput,
      author: authorInput,
      page: pageInput,
      dateRead: new Date(dateRead),
    };
    console.log(titleInput);
    console.log(authorInput);
    console.log(pageInput);
    console.log(dateRead);
    console.log(bookData);
    setAuthorInput("");
    setDateRead("");
    setTitleInput("");
    setPageInput("");

    // setAuthorInput;
    submitBookData(bookData);
  };

  return (
    <div>
      <button onClick={() => buttonFormHandler()}>SHOW FORM</button>
      {buttonForm ? (
        <button>ADD new lecture</button>
      ) : (
        <form className="new-book-controls">
          <div className="new-book-control">
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              onChange={valueTitleHandler}
              value={titleInput}
            />
          </div>
          <div className="new-book-control">
            <label htmlFor="author">Author:</label>
            <input
              id="author"
              type="text"
              onChange={valueAuthorHandler}
              value={authorInput}
            />
          </div>
          <div className="new-book-control">
            <label htmlFor="pageCount">How many pages do you read?:</label>
            <input
              id="pageCount"
              type="number"
              onChange={valuePageHandler}
              value={pageInput}
            />
          </div>
          <div className="new-book-control">
            <label htmlFor="dateRead">When do you read this book?</label>
            <input
              id="dateRead"
              type="date"
              onChange={dateReadHandler}
              value={dateRead}
            />
          </div>
          <button type="button" onClick={submitButtonHandler}>
            Send
          </button>
        </form>
      )}
    </div>
  );
}

export default BookForm;

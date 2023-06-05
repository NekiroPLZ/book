import BookItems from "./BookItems";
import "./Styles/Books.css";

function Books({ books }) {
  const mappedBooks = books.map((book, index) => (
    <BookItems
      key={book.id}
      title={book.title}
      author={book.author}
      dateRead={book.dateRead}
      pageCount={book.pageCount}
    />
  ));

  return (
    <div className="aling-books">
      {mappedBooks.length ? mappedBooks : <p>there isn't books here</p>}
    </div>
  );
}

export default Books;

import "./App.css";
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import Filter from "./components/Filter";
import { useState } from "react";
const books = [
  {
    title: "100 años de soledad",
    author: "Gabriel García Marquez",
    dateRead: new Date(2021, 8, 12),
    pageCount: 410,
  },
  {
    title: "Todos los fuegos el fuego",
    author: "Julio Cortazar",
    dateRead: new Date(2020, 6, 11),
    pageCount: 197,
  },
  {
    title: "Asesinato en el Orient Express",
    author: "Agatha Christie",
    dateRead: new Date(2021, 5, 9),
    pageCount: 256,
  },
  {
    title: "Las dos torres",
    author: "J.R.R Tolkien",
    dateRead: new Date(2020, 3, 22),
    pageCount: 352,
  },
];
function App() {
  const [originalBooks, setOriginalBooks] = useState(books);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const addedBookHandler = (book) => {
    setOriginalBooks((preBooks) => [book, ...preBooks]);
    console.log(originalBooks, book);
  };
  const filterYearHandler = (year) => {
    console.log(year);
    const book2 = originalBooks.filter((e) => {
      console.log(e.dateRead.getFullYear());
      return e.dateRead.getFullYear().toString() === year;
    });
    setFilteredBooks(book2);
  };
  return (
    <div className="App">
      <Filter filteredYear={filterYearHandler} />
      <NewBook newBookSaved={addedBookHandler} />
      <Books books={filteredBooks} />
    </div>
  );
}

export default App;

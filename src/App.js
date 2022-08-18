import "./App.css";
import {Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { useState,useEffect } from "react";
import * as BooksApi from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);
  const [mybooks, setMyBooks] = useState([]);

  const updateShelf = async (book,shelf)=> {
    await BooksApi.update(book,shelf).then(() => {
      setBooks([...books.filter((b) => b.id !== book.id), book]);
      });
  }

  useEffect(() => {
    const getAllBooks = async ()=> {
      const response = await BooksApi.getAll();
      setBooks(response);
      setMyBooks(response);
    }
    getAllBooks();
  }, [books]);

  return (
    <Routes>
      <Route exact path='/' element={<Home updateShelf={updateShelf} books={books}/>}/>
      <Route path='/search' element={<Search updateShelf={updateShelf} mybooks={mybooks}/>}/>
    </Routes>
     );
}

export default App;

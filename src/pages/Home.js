import {Link} from 'react-router-dom';
import Book from '../components/Book';
import { useState,useEffect } from "react";
import * as BooksApi from '../BooksAPI';

const Home = () => {
  const [status, setStatus] = useState(false);
  const [books, setBooks] = useState([]);

  const updateShelf = async (book,shelf)=> {
    setStatus(true);
    await BooksApi.update(book,shelf);
    setStatus(false);
  }

  useEffect(() => {
    const getAllBooks = async ()=> {
      const response = await BooksApi.getAll();
      setBooks(response);
    }
    getAllBooks();
  }, [status]);

 return (
  <div className="app">
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Book books={books} status={status} updateShelf={updateShelf} title={"Currently Reading"} shelf={"currentlyReading"}/>
        <Book books={books} status={status} updateShelf={updateShelf} title={"Want to Read"} shelf={"wantToRead"}/>
        <Book books={books} status={status} updateShelf={updateShelf} title={"Read"} shelf={"read"}/>
      </div>
      <div className="open-search">
       <Link  to='/search'>Add a book</Link>
      </div>
    </div>
  </div>
 )
}

export default Home;

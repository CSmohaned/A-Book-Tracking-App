import {Link} from 'react-router-dom';
import { useState,useEffect} from 'react';
import AddBook from '../components/AddBook';
import * as BooksApi from '../BooksAPI';

const Search = () => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [mybooks, setMyBooks] = useState([]);
  const [status, setStatus] = useState(false);
  const updateShelf = async (book,shelf)=> {
    await BooksApi.update(book,shelf);
  }

  useEffect(() => {
    setStatus(true);
    const searchBook = async (book)=> {
      await BooksApi.search(book).then((res)=> setBooks(res) );
    }
    if(search.length > 0) {
      searchBook(search);
    } else if(search.length === 0) {
      setBooks([]);
    }
    return () => setStatus(false);
  },[search,status]);

  useEffect(() => {
    const getAllBooks = async ()=> {
      const response = await BooksApi.getAll();
      setMyBooks(response);
    }
    getAllBooks();
  }, []);

  return (
    <>
    <div className="search-books">
    <div className="search-books-bar">
      <Link
        className="close-search"
        to='/'
      >
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid"></ol>
    </div>
  </div>
  <AddBook books={books} mybooks={mybooks} updateShelf={updateShelf}/>
  </>
  )
}

export default Search;

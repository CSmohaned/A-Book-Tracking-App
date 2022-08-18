import {Link} from 'react-router-dom';
import { useState,useEffect} from 'react';
import AddBook from '../components/AddBook';
import * as BooksApi from '../BooksAPI';
import debounce from 'lodash.debounce';

const Search = ({updateShelf,mybooks,}) => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(true);
    const searchBook = async (book)=> {
    const debouncedSave = debounce(() =>  BooksApi.search(book).then((res)=> setBooks(res) ), 1000);
		debouncedSave();
    }
    if(search.length > 0) {
      searchBook(search);
    } else if(search.length === 0) {
      setBooks([]);
    }
    return () => setStatus(false);
  },[search,status]);

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
  <AddBook books={books} mybooks={mybooks} updateShelf={updateShelf} />
  </>
  )
}

export default Search;

import {Link} from 'react-router-dom';
import Book from '../components/Book';

const Home = ({updateShelf,books}) => {

 return (
  <div className="app">
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Book books={books} updateShelf={updateShelf} title={"Currently Reading"} shelf={"currentlyReading"}/>
        <Book books={books} updateShelf={updateShelf} title={"Want to Read"} shelf={"wantToRead"}/>
        <Book books={books} updateShelf={updateShelf} title={"Read"} shelf={"read"}/>
      </div>
      <div className="open-search">
       <Link to='/search'>Add a book</Link>
      </div>
    </div>
  </div>
 )
}

export default Home;

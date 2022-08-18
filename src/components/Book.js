import Shelf from "./Shelf";
import PropTypes from 'prop-types';

const Book = ({books,updateShelf,title,shelf}) => {
 return (
  <div className="bookshelf">
   <h2 className="bookshelf-title">{title}</h2>
   <div className="bookshelf-books">
    <ol className="books-grid">
     {books.filter((book)=> book.shelf === shelf).length > 0 ? books.filter((book)=> book.shelf === shelf).map((item)=> 
      <Shelf item={item} updateShelf={updateShelf} status={true} key={item.id}/>
    ): <p>Sorry!... No Books To Show</p>}
    </ol>
   </div>
  </div>
 )
}

Book.propTypes = {
  books: PropTypes.array,
  updateShelf: PropTypes.func,
  title: PropTypes.string,
  shelf: PropTypes.string
}

export default Book;

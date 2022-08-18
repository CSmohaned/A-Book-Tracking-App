import Shelf from "./Shelf";
import PropTypes from 'prop-types';

const AddBook = ({books,updateShelf,mybooks}) => {
  return (
   <div className="bookshelf-books">
    <ol className="books-grid" >
      {books.length > 0 ? books.map((item)=> mybooks.filter((book)=> book.id === item.id).length > 0 ? 
      <Shelf item={mybooks.filter((book)=> book.id === item.id)[0]} updateShelf={updateShelf} status={true} key={mybooks.filter((book)=> book.id === item.id)[0].id}/>
    :
      <Shelf item={item} updateShelf={updateShelf} status={false} key={item.id}/>
    ): <p>Soory!... No Books To Show</p>}
  </ol> 
 </div>       
 )
}

AddBook.propTypes = {
  books: PropTypes.array,
  updateShelf: PropTypes.func,
  mybooks: PropTypes.array
}

export default AddBook;

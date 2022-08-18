
const Book = ({books,updateShelf,title,shelf}) => {
 return (
  <div className="bookshelf">
   <h2 className="bookshelf-title">{title}</h2>
   <div className="bookshelf-books">
    <ol className="books-grid">
     {books.filter((book)=> book.shelf === shelf).length > 0 ? books.filter((book)=> book.shelf === shelf).map((item)=> 
      <li key={item.id}>
      <div className="book">
       <div className="book-top">
        <div
          className="book-cover"
          style={{
          width: 128,
          height: 192,
          backgroundImage: `url(${item.imageLinks.thumbnail})`,}}>
        </div>
        <div className="book-shelf-changer">
         <select  onChange={(e)=> updateShelf(item,e.target.value)} defaultValue={item.shelf}>
          <option value="none" disabled>
              Move to...
          </option>
          <option value="currentlyReading">
            Currently Reading
          </option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
         </select>
        </div>
       </div>
       <div className="book-title">{item.title}</div>
        <div className="book-authors">{item.subtitle}</div>
       </div>
    </li>
    ): <p>Sorry!... No Books To Show</p>}
    </ol>
   </div>
  </div>
 )
}

export default Book;

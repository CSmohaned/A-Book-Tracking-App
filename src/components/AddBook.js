
const AddBook = ({books,updateShelf,mybooks}) => {
  return (
   <div className="bookshelf-books">
    <ol className="books-grid" >
      {books.length > 0 ? books.map((item)=> mybooks.filter((book)=> book.id === item.id).length > 0 ? 
      <li key={item.id}>
       <div className="book" >
        <div className="book-top">
         <div
           className="book-cover"
           style={{
           width: 128,
           height: 193,
           backgroundImage: `url(${mybooks.filter((book)=> book.id === item.id)[0].imageLinks && mybooks.filter((book)=> book.id === item.id)[0].imageLinks.smallThumbnail })`,}}>
         </div>
         <div className="book-shelf-changer">
          <select onChange={(e)=> updateShelf(item,e.target.value)} defaultValue={mybooks.filter((book)=> book.id === item.id)[0].shelf}>
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
      <div className="book-title">{mybooks.filter((book)=> book.id === item.id)[0].title}</div>
       <div className="book-authors">{mybooks.filter((book)=> book.id === item.id)[0].subtitle}</div>
      </div>
    </li>
    :
    <li key={item.id}>
     <div className="book" >
      <div className="book-top">
       <div
         className="book-cover"
         style={{
         width: 128,
         height: 193,
         backgroundImage: `url(${item.imageLinks && item.imageLinks.smallThumbnail})`,}}>
       </div>
       <div className="book-shelf-changer">
        <select onChange={(e)=> updateShelf(item,e.target.value)} defaultValue="none">
         <option value="none">
            Add to...
         </option>
         <option value="currentlyReading">
            Currently Reading
         </option>
         <option value="wantToRead">Want to Read</option>
         <option value="read">Read</option>
        </select>
       </div>
     </div>
     <div className="book-title">{item.title}</div>
      <div className="book-authors">{item.subtitle}</div>
     </div>
   </li>
    ): <p>Soory!... No Books To Show</p>}
  </ol> 
 </div>       
 )
}

export default AddBook;

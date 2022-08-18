import PropTypes from 'prop-types';

const Shelf = ({item,updateShelf,status}) => {
  const shelves = [{id:1, shelfName:"currentlyReading", shelfDisplayName:"Currently Reading"},
                   {id:2, shelfName:"wantToRead", shelfDisplayName:"Want to Read"},
                   {id:3, shelfName:"read", shelfDisplayName:"Read"},
                   {id:4, shelfName:"none", shelfDisplayName:"None"},
                  ];
  return (
    <>
     <li>
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
         <select  onChange={(e)=> updateShelf(item,e.target.value)} defaultValue={item.shelf || "none"}>
          <option>
              {status ? 'Move to...':'Added to...'}
          </option>
          {shelves.map( item => 
          <option key={item.id} value={item.shelfName}>{item.shelfDisplayName}
          </option>
          )}
         </select>
        </div>
       </div>
       <div className="book-title">{item.title}</div>
        <div className="book-authors">{item.authors}</div>
       </div>
    </li>
    </>
  )
}

Shelf.propTypes = {
    item: PropTypes.object,
    updateShelf: PropTypes.func,
    status: PropTypes.bool
  }

export default Shelf;

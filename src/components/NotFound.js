import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
 <>
    <Link
    className="close-search"
    to='/'
  >
    Close
  </Link>
    <div className="notPage">
       <p>404 - Page not found</p>
    </div>
 </>
  )
}

export default NotFound;

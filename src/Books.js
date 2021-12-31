import {useState, useEffect} from 'react';
import './Books.css';

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(()=> {
  fetch('http://localhost:8080/api/v1/books').then(res=> res.json()).then(r=>
  {
  console.log(r);
   setBooks(r);
  }
  );
  }, []);
  function getBooks(books){
    const bookDivs = [];
    books.forEach(book => {
    bookDivs.push(
    <div className="bookRow" key = {book.name}>
    <div title={book.name}>{book.name}</div>
    <div>{book.price}</div>
    <div>{book.author}</div>
    <div>{book.quantity}</div>
    <div>{book.barcode}</div>
    </div>
  );
    });
    return bookDivs;
  }
  return (
  <div id="bookContainer">
  <div className="headings">
  <div>Name</div>
  <div>Price</div>
  <div>Author</div>
  <div>Quantity</div>
  <div>Barcode</div>
  </div>
  {getBooks(books || [])}
  </div>
  );
}

export default Books;

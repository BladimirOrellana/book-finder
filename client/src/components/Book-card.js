import React from "react";
import {Link} from 'react-router-dom';
import  mongosse from 'mongoose';




const BookCard = props => {
  
  

return (
    <div className="col-sm-12 col-md-6 col-lg-2">
      <div className="book-card">
      <div className="book-card-side book-card-side-front">
      <div className="card bg-dark text-white">
  <img src={props.book.book_image} class="card-img home-card-img" alt="..."></img>
 </div>
      </div>
      <div className="book-card-side book-card-side-back">
      <div className="card">
  <div className="card-body">
    <h5 className="card-title">{props.book.title}</h5>
   <p>{props.book.description}</p>
    <a target="_blank" href={props.book.amazon_product_url}  className="btn btn-primary">Read More</a>
   
   
  </div>
</div>
     
      </div>
      </div>
    </div>
  );
};
export default BookCard;

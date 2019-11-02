import React from "react";
import {Link} from 'react-router-dom';
import  mongosse from 'mongoose';
import api from './../Api/localApi';



const BookCard = props => {
  
  api.localBooks().then((result) => {
    console.log("Local CARD",result)
  })
    let book = {
        title: props.book.title,
        link: props.book.amazon_product_url,
        photo:props.book.book_image
    }
  
    // db.Saved.create(book).then((results) =>{
    //     if(results){
    //         console.log("Suuccess")
    //     }else{
    //         console.log("Fail")
    //     }
    // })
return (
    <div className="col-sm-12 col-md-6 col-lg-2">
      <div className="book-card">
      <div className="book-card-side book-card-side-front">
      <div className="card bg-dark text-white">
  <img src={props.book.book_image} class="card-img" alt="..."></img>
 </div>
      </div>
      <div className="book-card-side book-card-side-back">
      <div className="card">
  <div className="card-body">
    <h5 className="card-title">{props.book.title}</h5>
   <p>{props.book.description}</p>
    <Link target="_blank" to={props.book.amazon_product_url}  className="btn btn-primary">Read More</Link>
   
   
  </div>
</div>
     
      </div>
      </div>
    </div>
  );
};
export default BookCard;

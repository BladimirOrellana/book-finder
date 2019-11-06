import React, { Component } from "react";
import API from "./../Api/Search-book";

import BookCard from "./Book-card";
class Book extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    this.getData();
   
  }

  getData = () => {
  
    API.getBooks()
      .then(response => {
        const booksData = response.data.results.books;
        this.setState({ books: booksData });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let books = this.state.books.map(book => {
      return <BookCard book={book} />;
    });

    return (
      <div className="container-fluid">
      <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Books You might like</h1>
  </div>
</div>
      
        <div className="row books-container">{books}</div>
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Checkout our GitHub page</h1>
   </div>
</div>
      </div>
    );
  }
}
export default Book;

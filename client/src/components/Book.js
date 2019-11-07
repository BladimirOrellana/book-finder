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
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Books You might like</h1>
          </div>
        </div>

        <div className="row books-container">{books}</div>
        <a href="https://github.com/BladimirOrellana/book-finder-23">
        <div className="jumbotron jumbotron-fluid git-hub">
          <h1 className="display-4">Checkout our GitHub Repo</h1>
        </div>
        </a>
      </div>
      
    );
  }
}
export default Book;

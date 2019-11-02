import React, { Component } from "react";
import API from "./../Api/Search-book-api/Search-book-api";
import localApi from './../Api/localApi';
import BookCard from "./Book-card";
class Book extends Component {
  state = {
    books: []
  };
  componentDidMount() {
    this.getData();
   
  }

  getData = () => {
    localApi.localBooks().then((result) => {
      console.log("Local is in the component books.js  ",result)
    })
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
        <div className="row">{books}</div>
      </div>
    );
  }
}
export default Book;

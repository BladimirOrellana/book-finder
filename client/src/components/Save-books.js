import React, { Component } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import API from "./../Api/Search-book";

class SavedBooks extends Component {
  state = {
    title: "",
    bookData: []
  };

  componentDidMount() {
    this.getSavedBookAPI();
  }
  getSavedBookAPI() {
    API.getSavedBook().then(result => {
      this.setState({
        bookData: result.data
      });
    });
  }

  showMenuOptions = id => {
    API.deleteSavedBook(id).then(result => {
      console.log(result);
      if (result.data === 1) {
      this.setState({
        bookData: this.state.bookData
      })


      }
    });
  };

  render() {
    console.log("Estae", this.state.bookData.Items);
    if (this.state.bookData.Items === 0) {
      document.getElementById("footer").style.display = "none";

      return (
        <div className="jumbotrom no-saved-books-message">
          <h1>No Saved Books</h1>
          <Link to="/">Search</Link>
        </div>
      );
    } else {
      let booksSaved = this.state.bookData.map(bookSaved => {
        return (
          <div key={bookSaved._id}>
            <div className="media book-media">
              <img
                src={bookSaved.thumbnail[0].smallThumbnail}
                className="mr-3"
                alt="..."
              ></img>
              <div className="media-body">
                <h5 className="mt-0">{bookSaved.title}</h5>
                <h6 className="mt-0">
                  <span className="text-muted">By</span> {bookSaved.authors}
                </h6>
                <p>{bookSaved.description}</p>
              </div>
              <i
                onClick={() => this.showMenuOptions(bookSaved._id)}
                id={bookSaved._id}
                className="fas fa-trash-alt"
              ></i>
            </div>
            <Link className="btn btn-success btn-block" to={bookSaved.infoLink}>Visit</Link>
          </div>
        );
      });
      return (
        <div className="container-fluid saved-page-header">
          <div className="jumbotron">
            <h1 className="display-4">Welcome</h1>
            <p className="lead">Here are your saved books</p>
            <hr className="my-4"></hr>
            <a className="btn btn-primary btn-lg" href="/" role="button">
              Search Another Book
            </a>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-8 col-lg-8">{booksSaved}</div>
              <div className="col-sm-12 col-md-4 col-lg-4"></div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default SavedBooks;

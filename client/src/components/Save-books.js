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
          <div>
            <div class="media book-media">
              <img
                src={bookSaved.thumbnail[0].smallThumbnail}
                class="mr-3"
                alt="..."
              ></img>
              <div class="media-body">
                <h5 class="mt-0">{bookSaved.title}</h5>
                <h6 class="mt-0">
                  <span className="text-muted">By</span> {bookSaved.authors}
                </h6>
                <p>{bookSaved.description}</p>
              </div>
              <i
                onClick={() => this.showMenuOptions(bookSaved._id)}
                id={bookSaved._id}
                class="fas fa-trash-alt"
              ></i>
            </div>
            <Link className="btn btn-success btn-block" to={bookSaved.infoLink}>Visit</Link>
          </div>
        );
      });
      return (
        <div className="container-fluid saved-page-header">
          <div class="jumbotron">
            <h1 class="display-4">Welcome</h1>
            <p class="lead">Here are your saved books</p>
            <hr class="my-4"></hr>
            <a class="btn btn-primary btn-lg" href="/" role="button">
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

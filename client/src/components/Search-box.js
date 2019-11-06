import React, { Component } from "react";
import API from './../Api/Search-book';
import SearchResult from './search-result';
class SearchBox extends Component {
  state = {
    title: '',
    searchTerm: [],
    term: ''
  };
  
  componentDidMount(){
  
  }

  searchOnChange = event =>{
   
 this.setState({
     term: event.target.value
   });
   
  }

  searcOnSubmit = event => {
    event.preventDefault();
    let searchTerm = this.state.term
  API.searchBook(searchTerm).then((result) =>{
  this.setState({
    searchTerm: result.data.items
  })
    
  })
   
  }

  render() {
   
console.log("BOX ",this.state.searchTerm)


  return (
    <div className="search-box">
      <form
       
        className=""
      >
        <input
          value={this.state.term}
          onChange={this.searchOnChange}
          name="term"
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search a book"
          aria-label="Search"
        ></input>
        <button
        id="submitButton"
        disabled={!(this.state.term)}
         onClick={this.searcOnSubmit}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
      <SearchResult result={this.state.searchTerm} />
    </div>
  );
}

  
  }

export default SearchBox;

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
    searchTerm: result.data.results
  })
    
  })
   
  }

  render() {
    console.log(this.state.term)
console.log(this.state.searchTerm)
if(this.state.searchTerm.length === 0){
  
  return (
    <div className="search-box">
      <form
       
        className="form-inline my-2 my-lg-0 "
      >
        <input
          value={this.state.term}
          onChange={this.searchOnChange}
          name="term"
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button
        disabled={!(this.state.searchTerm)}
         onClick={this.searcOnSubmit}
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>

      </form>
  zzzz
    </div>
  );
}else{

  return (
    <div className="search-box">
      <form
       
        className="form-inline my-2 my-lg-0 "
      >
        <input
          value={this.state.term}
          onChange={this.searchOnChange}
          name="term"
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button
        disabled={!(this.state.term)}
         onClick={this.searcOnSubmit}
          className="btn btn-outline-success my-2 my-sm-0"
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
}
export default SearchBox;

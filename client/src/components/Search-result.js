import React, {Component} from 'react';
import Header from './Header';
class SearchResult extends Component{
  
    state = {
        result: this.props.result
    }
      
        

    
    render(){
        console.log("STATE ",this.state.result)
let books = this.state.result.map((book) =>{
    return (
        <div className="container-fluid search-result-container">
        <div class="card bg-dark text-white search-result-card">
        <img src="..." class="card-img" alt="..."></img>
        <div class="card-img-overlay">
          <h5 class="card-title">{book.book_author}</h5>
          <p class="card-text">{book.book_title}</p>
          <a href={book.url}>Visit</a>
        </div>
      </div>
      
      </div>
     
    )
})
        if(this.state.result.length === 0){
            return (
                <div className="container-fluid">
               Sorry No results
                  </div>
                )
        }else{
            return (
                <div className="container-fluid">
                {books}
                  </div>
                )
        }
    
}
}
export default SearchResult;
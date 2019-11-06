import React, {Component} from 'react';
import Header from './Header';
import API from './../Api/Search-book';

class SearchResult extends Component{
  
   saveBook(bookObject){
     console.log(bookObject)
    API.saveBook(bookObject).then((result) =>{
     if(result.data === 1){   
     }else{
       alert("FAIL")
     }
    })
   }
    render(){
      
let books = this.props.result.map((book) =>{
  let bookObject = {
    bookId: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors,
    infoLink: book.volumeInfo.infoLink,
    thumbnail:book.volumeInfo.imageLinks,
    description:book.volumeInfo.description


  }
   if(book.volumeInfo.imageLinks){
    return (
      <div className="col-sm-6 col-md-4 col-lg-2">
     <div className="card bg-dark text-white search-result-card">
    <img data-id={book.id} src={book.volumeInfo.imageLinks.thumbnail} class="card-img home-card-img" alt="..."></img>
    <h5 className="card-title">{book.volumeInfo.title}</h5>
      <p className="card-text">{book.volumeInfo.authors}</p>
      <a className="visit-botton"  href={book.volumeInfo.infoLink}>Visit</a>
      <a className="saved-botton" onClick={() =>this.saveBook(bookObject)} data-id={book.id}>Save</a>
    </div>
  </div>
   
   
   
  
    

    )
   }
})
        if(this.props.result.length === 0){
            return (
                <div className="container-fluid">
              </div>
                )
        }else{
            return (
                <div className="container-fluid search-result-container">
                <div className="row">
                {books}
               </div>
                  </div>
                )
        }
    
}
}
export default SearchResult;

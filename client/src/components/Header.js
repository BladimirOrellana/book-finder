import React, {Component} from "react";
import SearchBox from './Search-box';
class  Header extends Component{
  
  render(){

  
  return (
    <div className="jumbotron jumbotron-fluid header-full">
      <div className="container header-content">
        <h1 className="display-4">Find me a book</h1>
        <p className="lead">
        Search and Save books of interest
         </p>
        <SearchBox />
       
       
      </div>
    </div>
  );
};
}
export default Header;

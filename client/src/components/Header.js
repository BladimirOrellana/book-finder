import React from "react";
import SearchBox from './Search-box';
const Header = () => {
  return (
    <div class="jumbotron jumbotron-fluid header-full">
      <div class="container header-content">
        <h1 class="display-4">Find me a book</h1>
        <SearchBox />
        <p class="lead">
        Search and Save books of interest
         </p>
       
      </div>
    </div>
  );
};
export default Header;

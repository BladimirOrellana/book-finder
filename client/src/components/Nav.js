import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  componentDidMount() {
    this.stikyNav();
  }
  render() {
    return (
      <div id="navbar" className="navbar-transparent">
        <Link className="nav-link" to='/'>Home</Link>
        <Link id="saved" className='nav-link' to='/save'>Save</Link>
        
      </div>

    );
  }

  stikyNav() {
    window.onscroll = function() {
      myFunction();
    };
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop + 700;
    

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.style.background = 'black';
      
        
      } else {
        navbar.classList.remove("sticky");
        navbar.style.background = 'black';
      }
    }
  }
}
export default Nav;

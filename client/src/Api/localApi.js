import axios from "axios";

export default {
  // Gets all books
  localBooks: function() {
    return axios.get("/api/books");
  }
};
import axios from 'axios';
const Apikey = "vRTZlWCRDqP5pF8xJdf5qWEA0U1oLVO7";
export default {
    searchBook: function(searchBook){
        return  axios('https://www.googleapis.com/books/v1/volumes?q='+searchBook)
    },
    getBooks: function(term){
        return  axios('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key='+Apikey)
             
      },
      saveBook: function(bookObject) {
        return axios.post("/api/save/book", bookObject);
      }
}
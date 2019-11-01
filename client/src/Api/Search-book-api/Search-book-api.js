import axios from 'axios';
const Apikey = "vRTZlWCRDqP5pF8xJdf5qWEA0U1oLVO7";

export default{
    getBooks: function(term){
      return  axios('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key='+Apikey)
           
    }
}


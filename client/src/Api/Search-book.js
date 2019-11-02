import axios from 'axios';
const Apikey = "vRTZlWCRDqP5pF8xJdf5qWEA0U1oLVO7";
export default {
    searchBook: function(searchBook){
        return axios.get('https://api.nytimes.com/svc/books/v3/reviews.json?author='+searchBook+'&api-key='+Apikey)
    }
}
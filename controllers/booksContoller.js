const db = require('../models');

module.exports = {
    findAll: function(res,req){
        db.Book.findAll().then((result) =>{
            console.log(result)
        })
    }
}
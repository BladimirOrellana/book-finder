const db = require('../models');

module.exports = {
    findAll: function(req,res){
        db.Book.find().then((result) =>{
            res.json(result)
        })
    }
}
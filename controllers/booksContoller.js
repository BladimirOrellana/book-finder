const db = require('../models');

module.exports = {
    findAll: function(req,res){
        db.Book.find().then((result) =>{
            if(result.length === 0){
                res.json("EMPTY: 0")
            }else{
                res.json(result)
            }
           
        })
    },
    deleteOne: function(req,res){
        db.Book.find().then((result) =>{
            if(result.length === 0){
                res.json("EMPTY: 0")
            }else{
                res.json(result)
            }
           
        })
    }
}
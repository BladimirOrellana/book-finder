const db = require('../models');

module.exports = {
    findAll: function(req,res){
        db.Book.find().then((result) =>{
            if(result.length === 0){
                res.json({"Items": 0})
            }else{
                res.json(result)
            }
           
        })
    },
    deleteOne: function(req,res){
        db.Book.find().then((result) =>{
            if(result.length === 0){
                res.json({"Items": 0})
            }else{
                res.json(result)
            }
           
        })
    },
    getSavedBook: function(req,res){
        db.Save.find().then((result) =>{
            if(result.length === 0){
                res.json({"Items": 0})
            }else{
                res.json(result)
            }
           
        })
    },
    saveBook: function(req,res){
        
    

        db.Save.create(req.body).then((result) =>{
            if(result.length === 0){
                res.json({"Items": 0})
            }else{
                res.json(1)
            }
           
        }).catch((err)=>{
            console.log(err)
        })
    }
}
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const saveSchema = new Schema({
    bookId:{type: String},
    title: {type: String},
    authors: {type: Array},
    infoLink:{type: String},
    description:{type: String},
    thumbnail:{type: Array}

});

const Save = mongoose.model("Save", saveSchema);

module.exports = Save;
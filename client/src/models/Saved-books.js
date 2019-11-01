import mongoose from 'mongoose';


const Schema = mongoose.Schema;


const savedSchema = new Schema({


    title:{
        type: String,
        required: true
    },
    link:{
        type: String,
        unique: true
     },
     
    photo: {
        type: String
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

const Saved = mongoose.model("Saved", savedSchema);
export default  Saved;
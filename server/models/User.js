import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:String
},Timestamp[true]);

export default mongoose.model('User',userSchema);

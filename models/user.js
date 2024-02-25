const mongoose=require("mongoose");
const Schema= mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema=new Schema({
    email:{
        type:String,
        required: true,
    },
    // Passport local mongoose will automatically adds USERNAME and PASSPORT
})
userSchema.plugin(passportLocalMongoose);

module.exports =mongoose.model("User",userSchema);
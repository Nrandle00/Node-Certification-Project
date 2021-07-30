const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    email : String,
    firstname : String,
    lastname : String,
    password : String,
    profileimage : String,
    streetaddress : String,
    city : String,
    state : String,
    zipcode : String,
    admin : Boolean
})

const UserModel = model("user", UserSchema, "users");

module.exports = UserModel
const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    email : String,
    firstname : String,
    lastName : String,
    password : String,
    admin : Boolean
})

const UserModel = model("user", UserSchema, "users");


module.exports = UserModel
const { Schema, model } = require("mongoose");

const HomePageSchema = new Schema({
    id : String,
    name : String,
    image : String
})

const HomePageBannerModel = model("homepage", HomePageSchema, "homepage");

module.exports = HomePageBannerModel;
const {Schema, model} = require("mongoose");

const ProductSchema = new Schema({
	name: String,
	department: String,
	price: Number,
	discount: Number,
	image: String,
	description: String
})

//name, schema, db collection
const ProductModel = model("product", ProductSchema, "products");

module.exports = ProductModel
const {Schema, model} = require("mongoose");

const subSchema = new Schema({
    productId: String,
    quantity: Number
})

const OrderSchema = new Schema({
	user: {
		firstName: String,
		lastName: String,
		password: String,
		email: String
	},
	cart: [
		subSchema
	]
})

//name, schema, db collection
const OrderModel = model("order", OrderSchema, "orders");

module.exports = OrderModel
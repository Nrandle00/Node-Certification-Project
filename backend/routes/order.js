const Router = require("express").Router();
const orderModel = require("../schema/order");


//post order
Router.post("/products", async (req, res)=>{
    try{
        const { user:{firstName, lastName, password, email,}, cart:[{productId, quantity}] } = req.body
        const order = new orderModel(user={firstName, lastName, password, email,}, cart=[{productId, quantity}]);

    }
    catch(error){
        res.status(500).json({
            status: "error",
            message: "Error storing information"
        })
    }
    
})

Router.get('/', async (req, res) => {
    try{
        const docs = await orderModel.find();
	    res.json(docs);
    }
    catch(error){
        res.status(500).json({
            status: "error",
            message: "Error finding products"
        })
    }
	
});

module.exports = Router;


const Router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const ProductModel = require("../schema/product");


Router.post("/products", multer().any(), async (req, res)=>{
    try{
        console.log(req.files[0], req.body);
        const file = req.files[0];
        const { name, department, price, discount, description } = req.body
        const filePath = path.join("/images/products/", file.originalname )

        fs.writeFile(path.join("./public", filePath), file.buffer, async (err)=>{
            
            const product = new ProductModel({
                name,
                department,
                price,
                discount,
                image : filePath,
                description
               
            })
            const doc = await product.save()
            res.json({ status : "success", message: "Product added successfully" })
        })
    }
    catch(error){
        res.status(500).json({
            status: "error",
            message: "Error storing information"
        })
    }
    
})

//delete product by id
Router.delete('/products/:id', async (req,res) => {

	try{
		const {params} = req;
		const {id} = params;

		const doc = await ProductModel.findByIdAndDelete(id);
		res.json({
			status: "success",
			message: "Person deleted successfully."
		})
	}
    catch(error){
        res.status(500).json({
            status: "error",
            message: "Error finding product"
        })
    }
	
})

// /admin/products/:id
Router.patch('/products/:id', async (req, res) =>{
    try{
        const { params, body } = req;
        const { id } = params;
        const doc = await ProductModel.findByIdAndUpdate(id, body)
        res.json({
            status: "success",
            message: "Product updated successfully"
        })
    }
    catch(error) {
        res.status(500).json({
            status: "error",
            message: "Error updating information"
        })
    }
    
})

module.exports = Router;
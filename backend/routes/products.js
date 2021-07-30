const Router = require("express").Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const ProductModel = require("../schema/product");

// get 8 random products
Router.get('/homepage/products', async (req, res) => {
    try{
        const docs = await ProductModel.aggregate([{$sample: {size: 8}}]);
	    res.json(docs);
    }
    catch(error){
        res.status(500).json({
            status: "error",
            message: "Error finding products"
        })
    }
	
});

//Get 3 most recently added products
Router.get('/homepage/banner', async (req, res) => {
    try{
        const docs = await ProductModel.find().sort( [['_id', -1]] ).limit(3);
	    res.json(docs);
    }
    catch(error){
        res.status(500).json({
            status: "error",
            message: "Error finding products"
        })
    }
	
});



Router.get('/homepage/departments', async (req, res) => {
    try{
         const docs = await ProductModel.distinct( "department" )
         
	    res.json(docs);
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            status: "error",
            message: "Error finding products"
            
        })
    }
});
Router.get('/department/:dep', async (req, res) => {
    try{
         const docs = await ProductModel.find({department : req.params.dep})
         
	    res.json(docs);
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            status: "error",
            message: "Error finding products"
            
        })
    }
});

//get all products
Router.get('/', async (req, res) => {
    try{
        const docs = await ProductModel.find();
	    res.json(docs);
    }
    catch(error){
        res.status(500).json({
            status: "error",
            message: "Error finding products"
        })
    }
	
});

//get product by id
Router.get('/:id', async (req, res) => {
    try{
        const {params, body} = req
        const {id} = params;
        const doc = await ProductModel.find({_id: id});
        res.json(doc);
    }
    catch(error){
        res.status(500).json({
            status: "error",
            message: "Error finding product"
        })
    }
	
});



module.exports = Router;


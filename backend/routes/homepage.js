const bcrypt = require("bcrypt");
const Router = require("express").Router();
const HomePageModel = require("../schema/hompage");

const AuthMiddleware = require("../middleware/authentication");


const jwt = require("jsonwebtoken")

Router.get("/banner", async (req, res)=>{
    try{
        const banners = await HomePageModel.find().sort( [['_id', -1]] ).limit(3);
        res.send(banners)
    }
    catch(error){
        res.status(500).json({ status : "error", message : "server error occured" })
    }
});

Router.get("/products/:cat", async (req, res)=>{
    try{
        const cats = await (await HomePageModel.aggregate([
            {$sample: {size: 1}},
            {$match: { category:req.params.cat } }
            ]));
    res.send(cats)
    }
    catch(error){
        res.status(500).json({ status : "error", message : "server error occured" })
    }
});

Router.get("/categories", async (req, res)=>{
    try{
        const cats = await (await HomePageModel.distinct( "department" ).aggregate([
                {$project:{category:1}},
                { $group: {
                    _id: {
                        department
                    }
                }},
                {$sample: {size: 3}}
                ]) );

        res.send(cats)
    }
    catch(error){
        res.status(500).json({ status : "error", message : "server error occured" })
    }
});


module.exports = Router;
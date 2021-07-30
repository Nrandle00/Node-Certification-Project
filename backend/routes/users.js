const bcrypt = require("bcrypt");
const Router = require("express").Router();
const UserModel = require("../schema/user")
const AuthMiddleware = require("../middleware/authentication")

const jwt = require("jsonwebtoken")

const SECRET_KEY = "dscwrcfdvjl4387398msl%$#^%cewncjno(&*^MNjjnjWWELK)098979d4@#"

// api/v1/users/login
Router.post("/login", async (req, res)=>{
    try{
        const { body } = req
        const { email, password } = body;

        const user = await UserModel.findOne({email : email})
        const verify = await bcrypt.compare(password, user.password)

        if(verify){
            const payload = {id : user._id, admin : user.admin || false}
            const token = jwt.sign(payload, SECRET_KEY, { expiresIn : 3600 })
            res.json({ status : "success", message : "user logged in successfully", accessToken : token, id: user._id})
            return false;
        }
        res.status(401).json({ status : "error", message : "username and password combination is incorrect" })
    }
    catch(error){
        res.status(401).json({ status : "error", message : "username and password combination is incorrect" })
    }
});

// api/v1/users/whoami
Router.get("/whoami", AuthMiddleware, async (req, res)=>{
    try{
        const payload = req.user;
        const user = await UserModel.findById(payload.id, "-password -__v")
        res.json(user)
    }
    catch(error){
        res.status(500).json({ status : "error", message : "server error occured" })
    }
});

// /user/register
Router.post("/register", async (req, res)=>{
    try{
        const { body } = req
        const { email, password, firstname, lastname, streetaddress, city, state, zipcode } = body;
        // console.log(email, password, firstname, lastname);
        if(email && password && firstname && lastname){
            
            const encryptedPassword = await bcrypt.hash(password, 5);
            const user = new UserModel({
                email,
                password : encryptedPassword, 
                firstname, 
                lastname,
                streetaddress,
                city,
                state,
                zipcode
            });
            await user.save();
            res.json({ status : "success", message : "user created successfully" })
        }
        else{
            res.status(400).json({ status : "error", message : "incomplete information provided" })
        }
    }
    catch(error){
        res.status(500).json({ status : "error", message : "server error occured" })
    }
    
});

module.exports = Router;
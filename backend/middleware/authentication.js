const jwt = require("jsonwebtoken")
const SECRET_KEY = "dscwrcfdvjl4387398msl%$#^%cewncjno(&*^MNjjnjWWELK)098979d4@#"

function AuthMiddleware(req, res, next){
    try{
        const { authorization } = req.headers;
        const payload = jwt.verify(authorization, SECRET_KEY);
        if(payload){
            req.user = payload
            next()
        }
    }
    catch(error){
        res.status(401).json({status : "error", message : "user not authorized"})
    }
}

module.exports = AuthMiddleware;
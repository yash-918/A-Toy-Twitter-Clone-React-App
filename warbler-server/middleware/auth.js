require("dotenv").config();
const jwt=require("jsonwebtoken");

exports.loginRequired= async function(req,res,next)
{
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded)
        {
            if(decoded){
                return next();
            }
            else
            {
                return next({
                    status:"401",
                    message :"Please login first"
                });
            }
        });
        
    } catch (error) {
        return next(error);
    }
}

exports.ensureCorrectUser= async function(req,res,next)
{
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded)
        {
            if(decoded && decoded.id=== req.params.id){
                return next();
            }
            else
            {
                return next({
                    status:"401",
                    message:"Unauthorized"
                });
            }
        });
        
    } catch (error) {
        return next(error);
    }
}


const { response } = require("express");

function errorHandler(error,req,res,next)
{
     return response.status(err.status || 500).json(
         {
             error:
             {
                 message:err.message||"Something went wrong"
             }
         }
     );
}

module.exports = errorHandler;
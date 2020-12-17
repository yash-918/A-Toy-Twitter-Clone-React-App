require("dotenv").config();
const express= require("express");
const app=express();
const cors= require("cors");
const PORT=8081;
const bodyParser=require("body-parser");
const { response } = require("express");
const errorHandler=require("./handlers/error.js");
const authRoutes= require("./routes/auth.js");
const messageRoutes=require("./routes/messages.js");
const {loginRequired,ensureCorrectUser}=require("./middleware/auth.js");

app.use(cors);
app.use(bodyParser.json());

app.use("/api/auth",authRoutes);
app.use("/api/users/:id/messages",loginRequired,ensureCorrectUser,messageRoutes);
// route to get all the messages
app.use("/api/messages",loginRequired,async function(req,res,next)
{
    try {
        let messages= db.Message.find()
                    .sort({createdAt:"desc"})
                    .populate("user",
                    {
                        username:true,
                        profileImageUrl:true
                    });
        res.status(200).json(messages);
    } catch (error) {
        next(error);
    }
})

// Error Handler Function
 app.use(function(req,res,next)
 {
     let err=new Error("Not Found");
     err.status=404;
     next(err);
 });

 app.use(errorHandler);

 app.listen(PORT,function(err)
 {
     if(err)
     {
         console.log("error in listen part");
     }
    console.log(`Backend Server is running on port ${PORT}`);
 })
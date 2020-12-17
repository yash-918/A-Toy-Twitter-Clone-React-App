const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const Message=require("./message.js");

const userSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        username:{
            type:String,
            required : true,
            unique: true
        },
        password:
        {
            type:String,
            required: true
        },
        profileImageUrl:{
            type:String
        },
        messages:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message"
        }]
    }
);

const User=mongoose.model("User",userSchema);

// creating a middleware for hashing password before saving the user details in database
userSchema.pre("save",async function(next)
{
    try {
        if(!this.isModified("password"))
        {
            return next();
        }
        let hashedPassword=bcrypt.hash(this.password,10);
        this.password=hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
})

// creating a compare method for our model to compare passwords
userSchema.methods.comparePassowrd=async function(candiatePassowrd,next)
{
    try {
        let isMatch = bcrypt.compare(candiatePassowrd,this.password);
        return( isMatch);
    } catch (error) {
            next(error);   
    }
}
module.exports=User;
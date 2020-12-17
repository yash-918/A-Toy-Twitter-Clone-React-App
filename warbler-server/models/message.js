const mongoose= require("mongoose");
const User= require("../models/user.js");

const messageSchema= new mongoose.Schema(
    {
        text:{
            type:String,
            required : true,
            maxlength:200
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    },
        {
            timestamps:true
        }
);

messageSchema.pre("remove",async function(next)
{
    try {
        let user=await User.findById(this.user);
        user.messages.remove(this.id);
        await user.save();
        return next();
    } catch (error) {
        next(error);
    }
})
const Message = mongoose.model("Message",messageSchema);
module.exports=Message;
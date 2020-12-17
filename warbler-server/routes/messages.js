const express=require("express");
const router = express.Router({mergeParams:true});

const {createMessage,getMessage,removeMessage}= require("../handlers/messages.js");

router.route("/").post(createMessage);

router.route("/:message_id").get(getMessage).delete(removeMessage);

module.exports=router;
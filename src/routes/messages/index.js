const router = require("express").Router();
const sendMessageRoute = require("./send-message");

router.post("/sendmessage", sendMessageRoute);

module.exports = router;
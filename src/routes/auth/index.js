const router = require('express').Router();
const loginRoute = require("./login");

router.post("/login", loginRoute);

module.exports = router;
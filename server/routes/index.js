const router = require("express").Router();
module.exports = router;

router.use("/house", require("./house.router"));

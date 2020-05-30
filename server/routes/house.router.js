const router = require("express").Router();
const House = require("../../models/index.js");

router.get("/", async (req, res, next) => {
  try {
    // res.send("voila");
    const house = await House.findAll();
    console.log("house", house);
    res.send(house);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

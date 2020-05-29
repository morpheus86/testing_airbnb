const router = require("express").Router();
const House = require("../../models/house.model");

router.get("/", async (req, res, next) => {
  try {
    // res.send("voila");
    const house = await House.findAll();
    res.send(house);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

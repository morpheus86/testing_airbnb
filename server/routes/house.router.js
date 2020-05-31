const router = require("express").Router();
const db = require("../../config/db.config");
// console.log("db", db);
const House = db.house;

router.get("/", async (req, res, next) => {
  try {
    // res.send("voila");
    const houses = await House.findAll();
    res.send(houses);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

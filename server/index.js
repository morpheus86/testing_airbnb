const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");

const app = express();

const db = require("../config/db.config");

const House = db.house;
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", routes);

app.use((err, req, res, next) => {
  // just in case
  if (!err.stack || !err.message) next(err);
  // clean up the trace to just relevant info
  const cleanTrace = err.stack
    .split("\n")
    .filter((line) => {
      // comment out the next two lines for full (verbose) stack traces
      const projectFile = line.indexOf(__dirname) > -1; // omit built-in Node code
      const nodeModule = line.indexOf("node_modules") > -1; // omit npm modules
      return projectFile && !nodeModule;
    })
    .join("\n");
  // colorize and format the output
  // console.log(chalk.magenta("      " + err.message));
  // console.log("    " + chalk.gray(cleanTrace));
  // send back error status
  res.status(err.status || 500).end();
});

// app.get("/", (req, res, next) => {
//   try {
//     res.send("hello");
//   } catch (error) {
//     next(error);
//   }
// });
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
  initial();
});
const server = app.listen(process.env.PORT || 500, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});

function initial() {
  House.create({
    host: 1,
    picture:
      "https://content.api.news/v3/images/bin/9bd6b502fd2fa9b16dc10d09cc0feda6",
    type: "Entire house",
    // town: "Ostuni",
    superhost: true,
    title: "Beautiful flat in Ostuni!",
    price: 50.0,
    superhost: true,
    description:
      "Spend a unforgettable holiday in the enchanting surroundings of the town of Cisternino (reachable from the near airports of Bari and Brindisi).<br>Trullo Edera offers a heaven of peace and tranquillity, set in an elevated position with a stunning view.<br> It's the perfect place if you like nature. You can stay under an olive tree reading a good book, you can have a walk in the small country streets or go to the nearest beaches.<br> You can even easily visit any of the sights in Apulia such as the caves of Castellana, the trulli of Alberobello, the baroque cities of Lecce and Martina Franca, the excavations of Egnazia, the zoosafari of Fasano, Castel del Monte with Frederick's castle, Grottaglie famous for its ceramics, Taranto, Brindisi and Lecce museums.<br>    Prices vary on period and are to be considered included: in-outcoming cleanings, towels, sheets, water, gas, electricity.",
    guests: 4,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    wifi: true,
    kitchen: true,
    heating: true,
    freeParking: true,
    entirePlace: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  House.create({
    host: 2,
    picture:
      "https://static.dezeen.com/uploads/2017/08/clifton-house-project-architecture_dezeen_hero-1.jpg",
    type: "Entire house",
    // town: "Isla Mujeres",
    title: "The World Famous Seashell House ~ Casa Caracol",
    price: 50.0,
    superhost: false,
    description:
      "An incredible house which mirror amazing and look toward a view to kill for",
    guests: 4,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    wifi: true,
    kitchen: true,
    heating: true,
    freeParking: true,
    entirePlace: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

module.exports = app;

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const port = process.env.PORT || 2000;
const app = express();
// const House = require("../modeling/house.model");
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
// House.sync({ alter: true });

app.listen(port, () => {
  console.log(`application is running on port ${port}`);
});

module.exports = app;

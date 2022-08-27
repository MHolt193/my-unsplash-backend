const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config");
const port = process.env.PORT || 5000;
const connectDb = require("./config/db");

connectDb();
const app = express();

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//cors all origins
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Controll-Allow-Credentials", true)
  next();
});

//Routes
app.use('/api/images', require("./routes/imageRoutes"))

//listen
app.listen(port, () => {
  console.log(`Server Listening on port ${port}.`);
});

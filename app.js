const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config");
const multer = require("multer");
const cors = require('cors')
const port = process.env.PORT || 5000;
const connectDb = require("./config/db");

connectDb();
const app = express();

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//cors all origins
app.use(cors());

//Routes
app.use('/api/images', require("./routes/imageRoutes"))

//listen
app.listen(port, () => {
  console.log(`Server Listening on port ${port}.`);
});

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv/config');
const multer = require('multer');
const port = preocess.env.PORT || 5000;

const app = express();


//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//listen
app.listen(port, ()=>{
    console.log(`Server Listening on port ${port}.`)
})
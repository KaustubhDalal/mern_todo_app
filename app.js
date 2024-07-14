const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectMongodb = require("./init/mangodb");
const todoRoute = require("./routes/todo");
const dotenv = require("dotenv");

//environment variable
dotenv.config();
//accessing environment variable 
// process.env.NAME

//init app
const app = express();

//mongodb connection
connectMongodb();

//view engine
app.set("view engine", "ejs");

//loading public directory files
app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({extended : true}));

// using imported routes here
app.use("/",todoRoute);

module.exports = app;
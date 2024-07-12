const express = require("express");
const mongoose = require("mongoose");
//init app
const app = express();

const PORT = 8000;

const connectionUrl = "mongodb://localhost:27017/todoDb";
mongoose
  .connect(connectionUrl)
  .then(() => {
    console.log("Connected to todoDb database");
  })
  .catch((error) => {
    console.log(error.message);
  });
//view engine
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

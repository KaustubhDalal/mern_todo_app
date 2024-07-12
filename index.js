const express = require('express');

//init app
const app = express();

const PORT = 8000;

//view engine
app.set("view engine","ejs");

app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
})
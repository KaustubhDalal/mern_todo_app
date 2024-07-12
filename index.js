const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

//init app
const app = express();

const PORT = 8000;

//Mongoose DB Connection
const connectionURL = 'mongodb://127.0.0.1:27017/todoDb'; // replace with your MongoDB connection string
mongoose.connect(connectionURL).then(() =>{
  console.log('Mongoose DB Connection success')
})
.catch((error) =>{
  console.log(errors)
});

//view engine
app.set("view engine", "ejs");

//loading public directory files
app.use(express.static(path.join(__dirname,"public")));
//rendering home page with view engine EJS
app.get("/",(req,res,next)=>{
  try{
    res.render("index",{title : "List todo"});
  }catch(error){
    res.status(500).json({message:error.message})
  }
});

//rendering add todo page with view engine EJS
app.get("/add-todo",(req,res,next)=>{
  try{
    res.render("newTodo",{title : "New todo"});
  }catch(error){
    res.status(500).json({message:error.message})
  }
});

//rendering update todo page with view engine EJS
app.get("/update-todo",(req,res,next)=>{
  try{
    res.render("updateTodo",{title : "Update todo"});
  }catch(error){
    res.status(500).json({message:error.message})
  }
});

//rendering delete todo page with view engine EJS
app.get("/delete-todo",(req,res,next)=>{
  try{
    res.render("deleteTodo",{title : "Delete todo"});
  }catch(error){
    res.status(500).json({message:error.message})
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

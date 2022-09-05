//importing modules
const express = require("express");
const bodyParser = require("body-parser");
//importing local module
const date = require(__dirname + "/date.js");
//creating express app
const app = express();

//declaring array for tasks
const tasks = ["buy food", "read", "ded"];
const workItems = []; //array for work

app.use(bodyParser.urlencoded({ extended: true }));
//fro using static resources img, css etc
app.use(express.static("public"));
//setting ejs as viewing engine
app.set("view engine", "ejs");
//get function for home route

app.get("/", function (req, res) {
 const day = date.getDate();
  //rendering using ejs
  res.render("list", { listTitle: day, newItems: tasks }); //passing result of logic to template file
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newItems: workItems });
});

app.post("/", function (req, res) {
    const task = req.body.newTask;
    if (req.body.list ===  'Work List '){
        workItems.push(task); 
        res.redirect("/work");
    }
    else{
       tasks.push(task);
  //redirecting the page to / show new task
  res.redirect("/"); 
    }
  
  
});

//declaring port no
app.listen(3000, function () {
  console.log("the server is live on port 3000");
});

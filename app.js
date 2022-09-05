//importing modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//declaring array for tasks
let tasks = ["buy food", "read", "ded"];
let workItems = []; //array for work

app.use(bodyParser.urlencoded({ extended: true }));
//fro using static resources img, css etc
app.use(express.static("public"));
//setting ejs as viewing engine
app.set("view engine", "ejs");
//get function for home route

app.get("/", function (req, res) {
  let today = new Date(); //getting current date

  //declaring var for date
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  //returning date as a string in
  let day = today.toLocaleDateString("en-US", options);
  //rendering using ejs
  res.render("list", { listTitle: day, newItems: tasks }); //passing result of logic to template file
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newItems: workItems });
});

// app.post("/work", function (req, res) {
//   let task = req.body.newTask;
//   workItems.push(task);
//   //redirecting the page to / show new task
 
// });

//taking form input with a post request on home route

app.post("/", function (req, res) {
    let task = req.body.newTask;
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

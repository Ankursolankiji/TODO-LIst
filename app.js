//importing modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//setting ejs as viewing engine
app.set("view engine", "ejs");
//get function for home route
app.get("/", function (req, res) {
  var today = new Date(); //getting current date
  var currentDay = today.getDay(); //storing date
  var day = {};
  //Condition for each day 
  if (currentDay === 1) {
    day = "Monday";
 } 
 else if(currentDay === 2) {
    day = "tuesday";
 } 
 else if(currentDay === 3) {
    day = "Wednesday";
 } else if(currentDay === 4) {
    day = "Thursday";
 } else if(currentDay === 5) {
    day = "Friday";
 } else if(currentDay === 6) {
    day = "Saturday";
 } 
 else {
    day = "Sunday";
  }
  res.render("list", { kindOdDay: day }); //passing result of logic to template file
});

//declaring port no
app.listen(3000, function () {
  console.log("the server is live on port 3000");
});

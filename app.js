//importing modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//setting ejs as viewing engine
app.set("view engine", "ejs");
//get function for home route
app.get("/", function (req, res) {
  var today = new Date(); //getting current date
  
  var day = {};
 //declaring var for date
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  //returning date as a string in
  var day = today.toLocaleDateString("en-US",options);
  res.render("list", { kindOfDay: day }); //passing result of logic to template file
});

//declaring port no
app.listen(3000, function () {
  console.log("the server is live on port 3000");
});

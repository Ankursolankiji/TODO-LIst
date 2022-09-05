//creating a module
exports.getDate =function() {//anomynous function
  const today = new Date(); //getting current date

  //declaring var for date
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  //returning date as a string in
  return day = today.toLocaleDateString("en-US", options);
 
}
exports.getDay =function() {
  const today = new Date(); //getting current date

  //declaring var for date
  const options = {
    weekday: "long",
  };
  //returning date as a string in
  return day = today.toLocaleDateString("en-US", options);
 
}

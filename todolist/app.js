const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const date=require(__dirname+"/date.js");
const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.listen(3000, function() {
  console.log("running on port 3000");
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  let day=date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {
  console.log("User input : " + req.body.newItem);
  const item = req.body.newItem;
  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List", newListItems:workItems})
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});
app.get("/about",function(req,res){
  res.render("about",{});
});

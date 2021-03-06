//jshint esversion: 6
const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
  console.log("server on port 3000");
});

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var baseUrl="https://apiv2.bitcoinaverage.com/indices/global/ticker/";
  var crypto=req.body.crypto;
  var fiat=req.body.fiat;
  var finalUrl=baseUrl+crypto+fiat;
  request(finalUrl,function(error,response,body){
  var data=JSON.parse(body);
  var price=data.last;
  var currentDate=data.display_timestamp;
  res.write("<p>The current date is "+currentDate +"</p>");
  res.write("<h1>The current price of "+crypto+" is "+price+"</h1>");
  res.send();

  })
});

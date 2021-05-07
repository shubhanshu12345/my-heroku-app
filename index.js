

const http = require("http");
const fs = require("fs");
const express=require('express');
const app=express();
const path=require("path");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static("assets"));

app.get('/',function(req,res){
    res.send("<h1> HELLO</h1>");
})


app.listen(8000, function (r, e) {
    if (e) {
      console.log(e);
    } else {
      console.log("running");
    }
  });
  
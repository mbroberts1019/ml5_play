// jshint esversion: 6
const express = require("express");
const app = express();
//const path = require("path");

app.use(express.static("imageClass"));
//app.use('/static', express.static(path.join(__dirname, 'imageClass')));
app.get("/", function(req, res) {

  res.sendFile('index.html');
});

app.listen(3000, function() {
  console.log('server started on port 3000');
});


/* got this to work by moving index.html out of imageClass folder and setting express.static(".").... how the hell does all this work?  tried every combination of paths and I am still having to use absolute path why no relative path?*/
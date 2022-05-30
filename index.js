var express = require('express');
var app = express()
app.get('/', function (req, res) {
  res.send('Hello World!!!');
});
app.listen(3000, function () {
  console.log('Running on port 3000!')
});

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.post('/addtask', function (req, res) {
  res.render('index')
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


var task = ["buy milk", "learn javascript", "learn express"];

app.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});
app.get("/", function(req, res) {
    res.render('index', { task: task, complete: complete});
});
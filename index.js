var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));

var task = [];

var complete = [];


app.post("/addtask", function(req, res) {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});

app.post("/removetask", function(req, res) {
    var completeTask = req.body.check;

    if (typeof completeTask === "string") {
        complete.push(completeTask);
        task.splice(task.indexOf(completeTask), 1);
    } 
    res.redirect("/");
});

app.get("/", function(req, res) {
    res.render("index", { task: task, complete: complete });
});


app.listen(3009, function() {
    console.log("server is running on port 3009");
});
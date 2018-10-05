/* Connection to Cassandra */
"use strict";
const cassandra = require('cassandra-driver');
var createKsQuery ="CREATE KEYSPACE kmd_blackboard WITH REPLICATION = {  'class' : 'NetworkTopologyStrategy',  'datacenter1' : 1 } ;" ;
const client = new cassandra.Client({ contactPoints: ['172.18.0.22']});
client.connect()
.catch(function (err) {
    console.error('There was an error when connecting', err);
    return client.shutdown();
});
/* ************************************************** */
/* Require packages, set up a few things */
var express    = require("express"),
    app        = express(),
bodyParser = require("body-parser"),
session = require("express-session");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(session({
  secret:"a12341234asflk;aksdjflaskdfjdfjsdlf",
  resave: true,
  saveUninitialized:true
}))

/* *************************************************** */
/* RESTful route */

app.get("/", function(req, res) {
  res.render("landing");
});
// Login 
app.get("/login",function(req,res){
  if(!req.session.user){
    res.render("login");
  }else{
    res.redirect("/courses")
  }
  
})
app.post("/login",function(req,res){
  req.session.user=req.body.username
  console.log(req.session.user)
  res.redirect("/courses")
})
// INDEX - Show all courses
app.get("/courses", function(req, res) {
  
  //if there is no login session then redirect back to "/"
if(!req.session.user){
  res.redirect("/login")
}else{
 res.send("YES")
}


});


// CREATE - Adds new course to db
app.post("/courses", function(req, res) {
  
});

// NEW - Shows form to add new courses
app.get("/courses/new", function(req, res) {
  res.render("new.ejs"); 
});

// SHOW - Shows info about courses
app.get("/courses/:id", function(req, res) {
 
});

app.listen(80, process.env.IP, function() {
  console.log("Server has Started New!!!");
});
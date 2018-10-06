/* Connection to Cassandra */
"use strict";
const cassandra = require('cassandra-driver');
var createKsQuery = "CREATE KEYSPACE kmd_blackboard WITH REPLICATION = {  'class' : 'NetworkTopologyStrategy',  'datacenter1' : 1 } ;";
const client = new cassandra.Client({
  contactPoints: ['172.18.0.22']
});
client.connect()
  .catch(function (err) {
    console.error('There was an error when connecting', err);
    return client.shutdown();
  });
/* ************************************************** */
/* Require packages, set up a few things */
var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  session = require("express-session");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");
app.use(session({
  secret: "!@#$%^",
  resave: true,
  saveUninitialized: true
}))
app.use(express.static(__dirname + "/public"));
/* *************************************************** */
/* Landing */
app.get("/", function (req, res) {
  res.render("landing");
});
app.use(function(req, res, next) {
  res.locals.currentUser = req.session.username;
  next();
});
/* *************************************************** */
/* login */
app.post("/login", function (req, res) {

  if (req.body.username != "") {
    client
      .execute("SELECT * FROM kmd_blackboard.users WHERE username='" + req.body.username + "'",
        function (err, result) {
          if (!err) {
            if (result.rowLength == 1) {
              
              if (result.rows[0].username == req.body.username && result.rows[0].password == req.body.password) {
                req.session.username = result.rows[0].username;
                res.redirect("/courses");
              } else {
                req.session.ok = false;
                res.redirect("/login")
              }
            } else {
              req.session.ok = false;
              res.redirect("/login")
            }

          } else {
            console.log(err);
          }
        })
  } else {
    req.session.ok = false;
    res.redirect("/login")
  }
})
app.get("/login", function (req, res) {
  
  if(!req.session.username){
 
    var ok;
    if (req.session.ok == false) {
      ok = req.session.ok;
    } else {
      ok = true;
    }
    res.render("login", {
      ok: ok
    });
  }else{
 
    res.redirect("/courses")
  }
})
/* *************************************************** */
/**  Log Out **/
app.get("/logout",function(req,res){
  if(req.session.username){
    req.session.destroy();
    req.session=null;
  }
  res.redirect("/")
})

/* *************************************************** */
/**  Show all courses **/
app.get("/courses", function (req, res) {
  if (req.session.username) {
    var username=req.session.username;
    
    client.execute("SELECT * FROM kmd_blackboard.courses_by_user WHERE username='"+username+"'",
    function(err,result){
        if(!err){
          var rows=result.rows;
          res.render("courses",{rows,rows})
        }else{
          console.log(err);
        }
    })
  } else {
    res.redirect("/login");
  }
});
/* *************************************************** */
/**  Show one course **/ 
app.get("/courses/:id", function (req, res) {
  res.render("coursedetails")
  });






// CREATE - Adds new course to db
app.post("/courses", function (req, res) {
  res.redirect("/courses")
});

// NEW - Shows form to add new courses
app.get("/courses/new", function (req, res) {
  res.render("new.ejs");
});

// SHOW - Shows info about courses
app.get("/courses/:id", function (req, res) {
res.send("hi")
});

app.listen(80, process.env.IP, function () {
  console.log("Server has Started!!!");
});
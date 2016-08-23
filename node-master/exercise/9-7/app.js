var MongoClient = require("mongodb").MongoClient;

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser());
app.use(express.static(path.join(__dirname, "public")));
app.get("/send",function(req,res){
    res.redirect("../");
});
app.post("/send", function(req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var age = req.body.age;
    if (!username || !email || !age) {
        res.render("message", {message: "請填寫完整資料喔！"});
    } else {
        MongoClient.connect("mongodb://username:password@127.0.0.1/mydb?authSource=admin", function(err, db) {
            if (!err) {
                db.collection("users").insert({username: username, email: email, age: parseInt(age)}, function(err, result) {
                    if (!err) {
                        res.render("message", {message: "謝謝您！", success:true});
                    } else {
                        res.render("message", {message: "寫入失敗！"});
                        console.log(err);
                    }
                });
            } else {
                res.render("message", {message: "連接失敗！"});
                console.log(err);
            }
        });
    }
});
app.get("/list",function(req,res){
    MongoClient.connect("mongodb://username:password@127.0.0.1/mydb?authSource=admin", function(err, db) {
        if (!err) {
            var age = req.query.age;
            var filter = {};
            if (age) {
                age = parseInt(age);
                filter = {age:{$gte:age}};
            }
            db.collection("users").find(filter).toArray(function(err,data) {
                if (!err) {
                    res.render("list",{data:data,query:req.query});
                } else {
                    res.render("message", {message: "讀取失敗！"});
                    console.log(err);
                }
            });
        } else {
            res.render("message", {message: "連接失敗！"});
            console.log(err);
        }
    });
});
app.get("/edit/:id",function(req,res) {
    MongoClient.connect("mongodb://username:password@127.0.0.1/mydb?authSource=admin", function(err, db) {
        if (!err) {









        } else {
            res.render("message", {message: "連接失敗！"});
            console.log(err);
        }
    });
});
app.post("/edit",function(req,res) {

    var username = req.body.username;
    var email = req.body.email;
    var age = req.body.age;
    if (    || !username || !email || !age) {
        res.render("message", {message: "請填寫完整資料喔！"});
    } else {
        MongoClient.connect("mongodb://username:password@127.0.0.1/mydb?authSource=admin", function(err, db) {
            if (!err) {
                db.collection("users").update({},function(err,data) {
                    if (!err) {
                        
                    } else {
                        res.render("message", {message: "寫入失敗！"});
                        console.log(err);
                    }
                });
            } else {
                res.render("message", {message: "連接失敗！"});
                console.log(err);
            }
        });
    }
});
app.listen(process.env.PORT || 3000);
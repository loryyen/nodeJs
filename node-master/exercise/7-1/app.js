var express=require("express");
var app=express();
app.get("/",function(req,res){
	res.send("<h1>Hello Node.Js!</h1>")
});
app.listen(process.env.PORT||3000);
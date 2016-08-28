var express = require("express");
var path=require("path");
var app = express();
app.use(express.static(path.join(__dirname,"public")));
app.get("/", function(req, res) {
    res.send("你的名子是:" + req.query.name);
});
app.listen(process.env.PORT || 3000);

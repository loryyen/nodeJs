var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var fs = require("fs");
var path = require("path");
var app = express();
var uploading = multer({
    dest: __dirname + "/upload",
});
app.use(bodyParser());
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function(req, res) {
    res.send("你的名子是:" + req.query.name);
});
app.post("/upload", uploading.any(), function(req, res) {
    for (var i = 0; i < req.files.length; i++) {
        var file = req.files[i];
        fs.renameSync(file.path, "./upload/" + file.originalname);
    }
    res.send("ok:" + req.body.message);
});
app.listen(process.env.PORT || 3000);

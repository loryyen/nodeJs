var formidable= require("formidable");
var url = require("url");
var fs = require("fs");
module.exports = function(request, response) {
    var pathname = url.parse(request.url).pathname;
    if (pathname === "/api/upload/" && request.method === "POST") {
    	var form = new formidable.IncomingForm();
    	form.uploadDir="./upload/";
    	form.on("file",function(field,file){
    		fs.renameSync(file.path,"./upload/"+file.name);
    	});
    	form.on("field",function(field,value){
    		request.body=request.body||{};
    		request.body[field]=value;
    	});
    	form.on("end",function(){
    		response.writeHead(200,{
    			"Content-Type":"text/html;charset=utf-8"
    		});
    		response.write("Success :"+request.body.content);
    		response.end();
    	});
    }
};
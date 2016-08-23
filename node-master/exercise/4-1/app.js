var http=require("http");
http.createServer(function(request,response){
response.write("Hello Node.Js!");
response.write("Hello Node.Js!");
response.write("Hello Node.Js!");
response.write("Hello Node.Js!");
response.write("Hello Node.Js!123");
response.end();
}).listen(process.env.PORT||3000);
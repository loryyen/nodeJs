var fs=require("fs");
fs.readFile("abc.txt","utf-8",function(err,data){
	if(!err){
	  console.log("data:%s",data);
	}
});
console.log("end");
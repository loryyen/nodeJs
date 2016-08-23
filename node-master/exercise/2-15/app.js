var fs=require("fs");
try{
var data=fs.readFileSync("abcd.txt","utf-8");
}
catch(e){
console.log(e);
}
console.log("data:%s",data);
console.log("end");
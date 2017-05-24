var EventEmitter=require("events").EventEmitter;

var emitter=new EventEmitter();

var fs=require("fs");
var path=require("path");

var filePath=path.join(__dirname,"sample.txt")
// var filePath=__dirname+"/sample.txt"

emitter.on("start_reading", function(filePath){

	console.log("start reading file")

	fs.readFile(filePath,"utf-8",function(err,data){
		if(err){
		 console.log("error",err);
		}
		emitter.emit("print_content", data)
	})
})

emitter.on("print_content", function(data){
	console.log(data)
	emitter.emit("done","successfully done reading the content")
})

emitter.on("error", function(message){
	console.log("there is an error !!!")
	console.log(message);
})

emitter.on("done", function(message){
	console.log(message)
})
emitter.emit("start_reading",filePath);
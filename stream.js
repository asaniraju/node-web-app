var fs=require("fs");

var filePath="./sample.txt"

var readable= fs.createReadStream(filePath,
										{encoding:"utf-8",
										highWaterMark : 16 * 1024})

var writable=fs.createWriteStream("./samplenew.txt");

readable.on("data",function(chinni){
	console.log(chinni.length)
	writable.write(chinni)
})
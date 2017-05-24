var buffer=new Buffer("Hello world","utf-8")
console.log(buffer);
// console.log(buffer.toString());
console.log(buffer.toJSON());

buffer.write("Good Morning");

// console.log(buffer.toString())



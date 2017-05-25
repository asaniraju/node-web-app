// var string=

var sample=function(name){
	return "Hello good morning"+name;
}
var displayMessage=function(){
	return "hello display message function"
}
/*module.exports= {
	sample: sample,
	display: displayMessage

};*/

module.exports.display =function(){
	return "this is module exports function call";
}
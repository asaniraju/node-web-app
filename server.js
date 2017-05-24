var express=require("express");

var app=express();

var router=express.Router();

router.get("/",function(request, response){
	response.json({message: "hello hyderabad!!!"})
})
router.get("/user1",function(request, response){
	response.json({message: "this is user endpoint"})
})

app.use("/api",router)

var PORT =process.env.PORT || 1337;
app.listen(PORT,function(){
	console.log("server Listening at port 1337!!"+PORT)
})

router.get("/customer", function(request,response){

	var customer={
	name:"raju",
	location:"hyderabad"
	}

	response.json(customer.name+" "+customer.location)

})
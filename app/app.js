var express = require('express');
var app = express();
var path    = require("path");

app.use(express.static(__dirname + '/static'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/',function(req,res){
	 res.sendFile(path.join(__dirname+'/index.html'));
});

var port = 3000;
app.listen(port, function () {
	console.log("elarbee.io server started on port "+port);
});

app.get("/secret", function(req,res){
	res.send("SECRET!!");
})

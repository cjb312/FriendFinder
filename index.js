// npms
var express = require(express);
var bodyParser = require(body-parser);
var path = require(path);

//server port for node
var app = express;
var PORT = 3000;

//listens for when the is called upon and logs within terminal
app.listen(PORT, function(){
	console.log("Application listening on PORT:" + PORT)
});

//required body-parser snippets from npm website
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

//route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


var dataFriends = require("../data/friends");


module.exports = function(app) {
//getting friends
  app.get("/api/friends", function(req, res) {
    res.json(dataFriends);
  });

//posting/pushing friends
  app.post("/api/friends", function(req, res) {
  
      dataFriends.push(req.body);
    
  });

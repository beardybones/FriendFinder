var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends/:id", function(req, res) {
        res.json(friendsData);
    })

    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        console.log(res);
        // friendsArray.push(res);
        //loop through friends array for match
        res.json(true);
    });

    app.post("/api/clear", function(req, res) {
        friendsData.length = [];
        res.json({ ok: true });
      });
};
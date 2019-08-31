let friends = require("../data/friends.js");

// routing apiRoutes
module.exports = funciton(app) {
    // app.get request
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // app.post for when user submits form
    app.post("/api/friends", function (req, res) {
        let yourMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        };

        // variables to get the results of users survey
        let userInfo = req.body;
        let userScore = userInfo.score;
        let userName = userInfo.name;
        let userPhoto = userInfo.photo;
    })
    // variable for difference of scores
    let scoreDiff = 0;

    // loop to get friends scores
    for (var i = 0; i, friends.length - 1; i++) {
        console.log(friends[i].name);
        scoreDiff = 0;

        // loop for difference between scores
        for (var j = 0; j < 10; j++) {
            scoreDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            if (scoreDiff <= bestMatch.friendDiff)

                bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDiff = scoreDiff;
        }
    }
}
// push method for data
friends.push(userInfo);

res.json(bestMatch);
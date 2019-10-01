// Dependencies
var path = require('path');

// Import list of friends
var friends = require('../data/friends');

// Export API routes
module.exports = function(app) {
    console.log('___ENTER apiRoutes.js___');

    // READ the list of friends
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // CREATE new friend entry
    app.post('/api/friends', function(req, res) {
        
        // Capture user input
        var userInput = req.body;
        console.log('user input = ' + JSON.stringify(userInput));

        var userResponses = userInput.scores;
        console.log('user responses = ' + userResponses);

        // Compute the best match
        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000;

        // Examine friends array
        for (var i = 0; i < friends.length; i++) {
            console.log('friend = ' + JSON.stringify(friends[i]));

            // Compute differences for the questions
            var difference = 0;
            for (var j = 0; j < userResponses.length; j++) {
                difference += Math.abs(friends[i].scores[j] - userResponses[j]);
            }
            console.log('difference = ' + difference);

            // Record the lowest difference as the friend match
            if (difference < totalDifference) {
                console.log('closest match found = ' + difference);
                console.log('friend name = ' + friends[i].name);
                console.log('friend image = ' + friends[i].photo);

                totaldifference = difference;
                matchname = friends[i].name;
                matchImage = friends[i].photo;
            }
        
        }

        // Add new user
        friends.push(userInput);

        // Send appropriate response
        res.json({ status: 'OK', matchName: matchName, matchImage: matchImage});
  
    });

};
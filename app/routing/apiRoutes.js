// Dependencies
var path = require('path');

// Import list of friends
var friends = require('../data/friends');

// Export API routes
module.exports = function(app) {
    // console.log('___ENTER apiRoutes.js___');

    // READ the list of friends
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // CREATE new friend entry
    app.post('/api/friends', function(req, res) {
        
        // Console.log the user's input
        console.log(req.body.scores);

        // Capture user input
        var userInput = req.body;

        // ParseInt the user's answers by looping through them
        for(var i = 0; i < userInput.scores.length; i++) {
            userInput.scores[i] = parseInt(userInput.scores[i]);
        }

        // Establish some variables to help us compute the best match. The closest match numerically can be 0, and we'll start our search for matches at 20 to narrow the field.
        var friendIndex = 0;
        var minDifference = 20;

        // Examine the friends array
        for (var i = 0; i < friends.length; i++) {

            // Compute differences for the questions against every friend that is in our data array. Since we will populate this variable with a new integer, we will start at 0.
            var totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                // Calculate the difference between scores using absolute value
                var difference = Math.abs(userInput.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }
            
            // Record the lowest difference as the friend with the best match by picking the smallest difference until we've been through each person in the friends module
            if (totalDifference < minDifference) {
                
                // Make the minDifference variable equal to the totalDifference variable
                minDifference = totalDifference;
                // Picks the corresponding friend by their position in the friends module
                friendIndex = i;
                // Continue looping through the friends array to find a lower totalDifference if it exists
            }
        }

        // Add new user to the friends module
        friends.push(userInput);

        // Send appropriate response back to the user
        res.json(friends[friendIndex]);
  
    });

};
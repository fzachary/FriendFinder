// Required dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Configure express application
var app = express();
var PORT = process.env.PORT || 8080;

// Add body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// ROUTER for application
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// Listen on PORT
app.listen(PORT, function() {
    console.log("app listening on PORT: " + PORT);
});
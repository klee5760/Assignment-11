var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.Port || 4000;



app.use(express.json({ extended: false }));

require("./app/routing/api-route")(app);
require("./app/routing/html-route")(app);


app.listen(port, () => console.log("listening on port", port));
var express = require("express");
var moment = require("moment");

var app = express();

app.get("*", function (req, res) {
    var input = req.path.toString().slice(1);
    var output = {
        "unix": null,
        "natural": null
    }
    if () { //unix timestamp
        console.log("passed in unix timestamp");
        output["unix"] = ;//set outputs
        output["natural"] = ;//set outputs 
    } else if () { //natural language
        console.log("passed in natural language");
        output["unix"] = ;//set outputs
        output["natural"] = ;//set outputs
    }
    
    res.send(JSON.stringify(output));
});

app.listen(8080);

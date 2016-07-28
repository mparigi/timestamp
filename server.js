var express = require("express");
var moment = require("moment");

var app = express();

app.get("*", function (req, res) {
    var input = req.path.toString().slice(1);
    var output = {
        "unix": null,
        "natural": null
    }
    
    if (moment(input, "X", true).isValid()) { //unix timestamp
        console.log("passed in unix timestamp");
        output["unix"] = parseInt(input);
        output["natural"] = moment(input, "X", true).format("MMMM D, YYYY"); 
    } else if (moment(decodeURI(input), "MMMM D, YYYY", true).isValid()) { //natural language
        console.log("passed in natural language");
        output["unix"] = moment(decodeURI(input), "MMMM D, YYYY", true).format("X");
        output["natural"] = decodeURI(input);
    }
    
    res.send(JSON.stringify(output));
});

app.listen(process.env.PORT || 8080);

// Dependencies
var RoBible = require("../index");

// Get verse
RoBible.getVerse("Matei 1:1", function (err, data) {
    console.log(err || data);
});

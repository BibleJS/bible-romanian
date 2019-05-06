// Dependencies
const RoBible = require("..");

// Get verse
RoBible.getVerse("Matei 1:1", function (err, data) {
    console.log(err || data);
});

// Get books
RoBible.getBooks(function (err, data) {
    console.log(err || data);
});

// Search
RoBible.search(/meroza/i, function (err, data) {
    console.log(err || data);
});

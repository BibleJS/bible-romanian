// Dependencies
const bible = require("..");

// Get verse
bible.getVerse("Matei 1:1", function (err, data) {
    console.log(err || data);
});

// Get books
bible.getBooks(function (err, data) {
    console.log(err || data);
});

// Search
bible.search(/meroza/i, function (err, data) {
    console.log(err || data);
});

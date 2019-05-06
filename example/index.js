// Dependencies
const bible = require("..");

// Get verse
bible.getVerse("Matei 1:1", function (err, data) {
    console.log(err || data);
    // [ { bookname: 'Matei',
    //     chapter: '1',
    //     verse: '1',
    //     text:
    //      'Cartea neamului lui Isus Hristos, fiul lui David, fiul lui Avraam.' } ]
});

// Get books
bible.getBooks(function (err, data) {
    console.log(err || data);
    // [ 'Geneza',
    //   'Exodul',
    //   'Leviticul',
    //   'Numeri',
    //   'Deuteronomul',
    //   'Iosua',
    //   'Judecători',
    //   'Rut',
    //   ... ]
});

// Search
bible.search(/meroza/i, function (err, data) {
    console.log(err || data);
    // [ { bookname: 'Judecători',
    //     chapter: '5',
    //     verse: '23',
    //     text:
    //      'Blestemaţi pe Meroza, a zis Îngerul Domnului, blestemaţi, blestemaţi pe locuitorii lui; căci n-au venit în ajutorul Domnului, în ajutorul Domnului, printre oamenii viteji.' } ]
});

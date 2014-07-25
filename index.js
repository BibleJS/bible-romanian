// Dependencies
var ReferenceParser = require("bible-reference-parser");

/**
 * find
 * This function searches returns the objects from an array
 * that contains objects.
 *
 * @name find
 * @function
 * @param {Array} array The data array where the documents will be searched.
 * @param {Object} query A Mongo-like filter.
 * @return {Array} Documents that match the query.
 */
function find(array, query) {

    var col = array
      , res = []
      ;

    if (!col || !col.length || col.constructor !== Array) {
        return res;
    }

    itemsToFindForLoop:

    for (var i = 0; i < col.length; ++i) {
        var cItem = col[i];
        for (var f in query) {
            var fValue = query[f];
            if (typeof cItem[f] === "string" && typeof fValue === "string") {
                // a filter doesn't match to the query
                if (cItem[f] !== fValue) continue itemsToFindForLoop;
            } else if (typeof cItem[f] === "string" &&  fValue && fValue.constructor === Array) {
                // a filter doesn't match to the query
                if (fValue.indexOf(cItem[f]) === -1) continue itemsToFindForLoop;
            } else if (typeof cItem[f] === "string" &&  fValue && fValue.constructor === RegExp) {
                // a filter doesn't match to the query
                if (!fValue.test(cItem[f])) continue itemsToFindForLoop;
            }
        }

        res.push(cItem);
    }

    return res;
}

// Constants
const ALL_VERSES = require("./all-verses.json");

var RomanianBible = module.exports = {};

/**
 * getVerse
 * Fetches the verses that were requested in reference
 *
 *  e.g. Geneza 1:1    - returns one verse
 *    or Geneza 1:1,2  - returns two verses (1 and 2)
 *    or Geneza 1:1-10 - returns the verses 1 - 10
 *    or Geneza 1      - returns the whole chapter
 *
 * @name getVerse
 * @function
 * @param {String} reference Bible verse reference
 * @param {Function} callback The callback function
 * @return
 */
RomanianBible.getVerse = function (reference, callback) {

    // Parse reference
    var parsed = ReferenceParser(reference);
    if (!parsed) { return callback("Cannot parse the input."); }

    // Build the query
    var query = {
        bookname:   parsed.book
      , chapter:    parsed.chapter
      , verse:      parsed.verses
    };

    // "ALL" is special
    if (query.verse === "ALL") {
        delete query.verse;
    }

    // Send the response
    callback (null, find(ALL_VERSES, query));
};

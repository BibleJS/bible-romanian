/**
 * findQuery
 * This function searches returns the objects from an array
 * that contains objects.
 *
 * @name findQuery
 * @function
 * @param {Array} array The data array where the documents will be searched.
 * @param {Object} query A Mongo-like filter.
 * @return {Array} Documents that match the query.
 */
function findQuery (array, query) {

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

const ALL_VERSES = require ("./all-verses.json");


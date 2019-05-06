<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


# bible-romanian

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/bible-romanian.svg)](https://www.npmjs.com/package/bible-romanian) [![Downloads](https://img.shields.io/npm/dt/bible-romanian.svg)](https://www.npmjs.com/package/bible-romanian)

> Romanian Bible module

## :cloud: Installation

```sh
# Using npm
npm install --save bible-romanian

# Using yarn
yarn add bible-romanian
```


## :clipboard: Example



```js
// Dependencies
const bible = require("bible-romanian");

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
```



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:



## :memo: Documentation


### `getVerse(reference, callback)`
Fetches the verses that were requested in reference

 e.g. Geneza 1:1    - returns one verse
   or Geneza 1:1,2  - returns two verses (1 and 2)
   or Geneza 1:1-10 - returns the verses 1 - 10
   or Geneza 1      - returns the whole chapter

#### Params

- **String** `reference`: Bible verse reference
- **Function** `callback`: The callback function

#### Return
- ****

### `search(term, callback)`
Searches a String/Regular expression in all verses

#### Params

- **String|RegExp** `term`: String/Regular expression that should be contained in verses.
- **Function** `callback`: The callback function

#### Return
- ****

### `getBooks(callback)`
Returns an array with Bible books in Romanian

#### Params

- **Function** `callback`: The callback function

#### Return
- ****



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]


[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg

[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2014#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md

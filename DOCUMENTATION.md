## Documentation

You can see below the API reference of this module.

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


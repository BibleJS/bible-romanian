#!/bin/bash

ALL_VERSES_PATH="all-verses.json"
ALL_BOOKS_PATH="all-books.json"

if [ ! -f $ALL_VERSES_PATH ]; then
    wget http://goo.gl/w9xWL5 -O resources/$ALL_VERSES_PATH
fi

if [ ! -f $ALL_BOOKS_PATH ]; then
    wget http://goo.gl/P71XZQ -O resources/$ALL_BOOKS_PATH
fi

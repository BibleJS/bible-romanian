#!/bin/bash
ALL_VERSES_PATH="all-verses.json"
if [ ! -f $ALL_VERSES_PATH ]; then
    wget http://goo.gl/k7ZySl -O $ALL_VERSES_PATH
fi

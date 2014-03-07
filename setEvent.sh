#!/bin/sh
thing="s/defaultEvent/$1/"
cat index.html | sed -e $thing > presetIndex.html

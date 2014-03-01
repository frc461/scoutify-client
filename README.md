scoutify-client
===============

Scoutify: The Client component. This is mean to be a "webish" interface generating json documents with data on Robotics teams to be exported and then processed with <a href="https://www.github.com/team461WBI/scoutify-hub">scoutify-hub</a>.

Installation
------------

Clone, cd to directory, install node webkit and relevant parts, and then run `nw ../scoutify-client/`.

Creating A Preset Competition File
----------------------------------

###Linux
Make sure setEvent.sh is exutable.
`./setEvent.sh REGIONALNAME`
This will create an html file with the default value of the event field being REGIONALNAME.
Then you can press the "Use Preset Competition Value" on the navbar each time you start a new instance of scoutify-client.
ALTERNATIVELY you can change the package.json file `"main": "index.html",` to `"main": "presetIndex.html"`.

###Windows/Mac
Copy index.html to presetIndex.html and replace defaultEvent with the name of your regional.
The same principals from the linux bits apply.

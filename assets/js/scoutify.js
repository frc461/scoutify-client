var fs = require('fs');
var path = require('path');

function getUserHome() {
  return process.env.HOME /*|| process.env.USERPROFILE*/;
}

function writeToFile(whereToWrite, thingToWrite) {
  whereToWrite += '.txt';
  fs.mkdir(path.join(getUserHome(), '.scoutify'));
  fs.writeFile(path.join(getUserHome(), '.scoutify', whereToWrite), thingToWrite, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("The file was saved!");
    }
  }); 
}

$(".writefilebutton").click(function() {
    var t = $('textarea').val();
    writeToFile(t.substr(0,6), t);
}); 


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
function generateJsonString() {
	var dragons = $("input").map(function() {
		return [this.id,this.val];
	});

	return JSON.stringify(dragons);
)

$(".writefilebutton").click(function() {
    var t = $('textarea').val();
    writeToFile(, generateJsonString());
});

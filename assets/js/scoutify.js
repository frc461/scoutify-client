var fs = require('fs');
var path = require('path');

function getUserHome() {
	return process.env.HOME || process.env.USERPROFILE;
}

function stringyJson(dragons) {
	var orc = "{\n"
	for (x = 0; x < dragons.length / 2; x++ ) {
		orc += dragons[(x * 2) ] + ":";
		orc += dragons[(x * 2) + 1];
		if ( (x*2) != dragons.length / 2) {
			orc += ",\n";
		}
	}
	orc += "\n}\n";
}

function writeToFile(whereToWrite, thingToWrite) {
	whereToWrite += '.json';
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
	var dragons = $(".inputThings").map(function() {
		var unicorns = [$(this).attr("id"),$(this).val()];
		return unicorns;
	});
	console.log(jQuery.makeArray(dragons));

	return stringyJson(jQuery.makeArray(dragons));
}

$(".writefilebutton").click(function() {
    var medusa = $("#team").val() + "." + $("#round").val();
    writeToFile(medusa, generateJsonString());
});

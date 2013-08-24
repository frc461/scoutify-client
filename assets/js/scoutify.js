var fs = require('fs');
var path = require('path');

function getUserHome() {
	return process.env.HOME /*|| process.env.USERPROFILE*/;
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
		alert(unicorns);
	});
	console.log(dragons);

	return JSON.stringify(dragons);
}

$(".writefilebutton").click(function() {
    var medusa = $("#team").val() + "." + $("#round").val();
    writeToFile(medusa, generateJsonString());
});

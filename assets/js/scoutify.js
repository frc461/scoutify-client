var gui = require('nw.gui');
var win = gui.Window.get();
var fs = require('fs');
var path = require('path');

function getUserHome() {
	return process.env.HOME || process.env.USERPROFILE;
}

function stringyJson(dragons) {
	var orc = "{\n"
	for(x = 0; x < dragons.length / 2; x++) {
		orc += dragons[(x * 2)] + ":";
		orc += dragons[(x * 2) + 1];
		if ((x*2) + 2 != dragons.length) {
			orc += ",\n";
		}
	}
	orc += "\n}\n";
	return orc;
}

function writeToFile(teamNumber, whereToWrite, thingToWrite) {
	whereToWrite += '.json';
	fs.mkdir(path.join(getUserHome(), '.scoutify'));
	fs.mkdir(path.join(getUserHome(), '.scoutify', teamNumber));
	fs.writeFile(path.join(getUserHome(), '.scoutify', teamNumber, whereToWrite), thingToWrite, function(err) {
		if(err) {
			console.log(err);
		} else {
			alert("The file was saved!");
			win.reload();
			
		}
	}); 
}
function generateJsonString() {
	var dragons = $(".inputThings").map(function() {
		var unicorns = ["\"" + $(this).attr("id") + "\"",
						
						($(this).hasClass("outputAsString") ? "\"" : "") +
						$(this).val().replace(/\n/g, "\\n") +
					    ($(this).hasClass("outputAsString") ? "\"" : "")];
		
		return unicorns;
	});
	console.log(jQuery.makeArray(dragons));

	return stringyJson(jQuery.makeArray(dragons));
}

$(".writefilebutton").click(function() {
	var medusa = $("#team").val() + "." + $("#round").val();
	writeToFile($("#team").val(), medusa, generateJsonString());
});

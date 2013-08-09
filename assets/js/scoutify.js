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

function generate_json_string() {
	fancy_object = {
		match_number: document.getElementById("txt_match_number").value,
		match_type: document.getElementById("sel_match_type").value,
		alliances: [
			red: {
				score: document.getElementById("txt_red_score").value,
				teams: [
					{number: document.getElementById("red_team1_number").value},
					{number: document.getElementById("red_team2_number").value},
					{number: document.getElementById("red_team3_number").value},
				]
			},
			blue: {
				score: document.getElementById("txt_blue_score").value,
				teams: [
					{number: document.getElementById("blue_team1_number").value},
					{number: document.getElementById("blue_team2_number").value},
					{number: document.getElementById("blue_team3_number").value},
				]
			}
		]
	};
	console.log(JSON.stringify(fancy_object));
}

$(".writefilebutton").click(function() {
    var t = $('textarea').val();
    writeToFile(t.substr(0,6), t);
});

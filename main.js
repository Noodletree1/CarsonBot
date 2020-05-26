const Discord = require('discord.js');
const bot = new Discord.Client(); // bot object
const token = ' '; // DO NOT include token, bot will be invalidated

const PREFIX = '!'; // command prefix

const kane = '222095058436882443';
const sam = '221779100258402305';



bot.on('message', message=>{
	let args = message.content.substring(PREFIX.length).split(" "); //args === any text after the prefix

	switch(args[0]){ // switch statement for any commands
		case 'play':
			if (!args[1]) { // check if second argument was given
				message.channel.send("No link provided!");
				return;
			}
			if (args[1].substring(0, 11) != "https://www") { // check if second argument is a link
				message.channel.send("Invalid argument, valid link must be provided, did you include the https://?");
				return;
			}
			if (!message.member.voice.channel) {
				message.channel.send("You must be in a voice channel to play music!");
				return;
			}
//			if (message.member.voice.channel != "") {
//				message.channel.send("Permission denied!");
//				return;
//			}

		break;
	}
})



bot.login(token);

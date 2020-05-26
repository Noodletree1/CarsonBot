const Discord = require('discord.js');


const bot = new Discord.Client(); // bot object
const token = 'NzE0ODIyMDQxMjk0OTk1NDU5.Xs2Jow.4UBx9cW6hGPJYzc2l1i5_YeBiDM'; // DO NOT include token, bot will be invalidated

const PREFIX = '!'; // command prefix

const kane = '222095058436882443';
const sam = '221779100258402305';

var ytdl = require("ytdl-core");
var ffmpeg = require("ffmpeg");

servers = {};

bot.on('message', message=>{
	let args = message.content.substring(PREFIX.length).split(" "); //args === any text after the prefix

	switch(args[0]){ // switch statement for any commands
		case 'play':

			function play(connection, message){
				var server = servers[message.guild.id];

				server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));

				server.queue.shift();

				server.dispatcher.on("end", function(){
					if(server.queue[0]){
						play(connection, message);
					}else{
						connection.disconnect();
					}
				})
			}

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


			if (!servers[message.guild.id]) servers[message.guild.id] = {
				queue: []
			}

			var server = servers[message.guild.id];

			server.queue.push(args[1]);

			if (!message.member.voice.connection) message.member.voice.channel.join().then(function(connection)  {
				play(connection, message);
			})
		break;

		case 'skip':
			var server = servers[message.guild.id];
			if (server.dispatcher) server.dispatcher.end();

		break;

		case 'stop':
			var server = servers[message.guild.id];
			if(message.guild.voice.connection){
				for (var i = server.queue.length -1; i >= 0; i--) {
					server.queue.splice(i, 1);
				}

				server.dispatcher.end();
				console.log('stopped q')
			}
			if(message.guild.connection) message.member.voice.connection.disconnect;

		break;
	}

})



bot.login(token);

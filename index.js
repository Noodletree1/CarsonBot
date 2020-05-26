const Discord = require('discord.js');
const bot = new Discord.Client();
const token = ' ';

const PREFIX = '!';

const kane = '222095058436882443';
const sam = '221779100258402305';

bot.on('message', message=>{
	let args = message.content.substring(PREFIX.length).split(" "); //args === any text after the prefix

	switch(args[0]){ // switch statement for any commands
		case 'check':
			if (message.author.id === kane) {
				message.reply('kane')
			}
			else if (message.author.id === sam) {
				message.reply('sam')
			}
			break;

	  case 'vibecheck':
	  	message.channel.send({files: ["https://i.ytimg.com/vi/mYugwGNOIeM/maxresdefault.jpg"]});
	  	break;
	}
})

bot.on('message', message=>{

})

bot.login(token);

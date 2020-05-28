const Discord = require('discord.js'); //discord api
const config = require("./config.json"); // config gile
const bot = new Discord.Client(); // bot object
const token = config.token; // DO NOT include token, refer to config file
const PREFIX = config.prefix; // command prefix
const fs = require('fs'); //node.js file service for scanning through commands file

bot.commands = new Discord.Collection(); // setup command collection

//Fetch Commands from commands file
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	bot.commands.set(command.name, command)
}
//


//Make sure bot is online
bot.on('ready', () => {
	console.log("Bot Online!");
})
//


//Command handler
bot.on('message', message => {
	let args = message.content.substring(PREFIX.length).split(" ");

	switch (args[0]) {
		case 'yeet':
			bot.commands.get('yeet').execute(message, args);
		break;
	}
})
//

// bot login to server
bot.login(token);
//

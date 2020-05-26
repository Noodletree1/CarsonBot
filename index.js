const Discord = require('discord.js');

const bot = new Discord.Client();

const token = 'NzE0ODIyMDQxMjk0OTk1NDU5.Xs0UNg.HNgBciAS3rMng9fTPWHvkRCyAYg'; //whatever the current token may be.

bot.on('message', msg=>{
	if(msg.content == "first rodeo"){
		msg.reply('it aint his first rodeo.')
	}

})


bot.on('message', message => {
    console.log(message.content)
    if (message.author.id === '222095058436882443') {
        message.reply('i cant even tell how many rodeos youre on', { tts: true })
    }
	else if((message.author.id === '221779100258402305')){
		message.reply('looks like youre on your first rodeo.', { tts: true })
	}

})



bot.login(token);

bot.on('ready', () =>{
	console.log('This bot is online!')
})

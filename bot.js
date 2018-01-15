const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
		}
    if (message.content === 'おはよ') {
    	message.reply('うさぎ_(:3 」∠)');
		}
    if (message.content === 'こんにちは') {
    	message.reply('わにわに_(:3 」∠)');
  	}
    if (message.content === 'こんばんは') {
    	message.reply('わにわに_(:3 」∠)');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

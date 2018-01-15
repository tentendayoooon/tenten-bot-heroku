const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	const msg = message.content;
	if (msg === 'ping') {
		message.reply('pong');
	}
	if (msg === 'おはよ') {
		message.reply('うさぎ_(:3 」∠)');
	}
	if (msg === 'こんにちは') {
		message.reply('わにわに_(:3 」∠)');
	}
	if (msg === 'こんばんは') {
		message.reply('わにわに_(:3 」∠)');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

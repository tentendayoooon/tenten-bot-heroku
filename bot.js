const Discord = require('discord.js');
const client = new Discord.Client();

String[] t = new String[]{'ノーマル特攻','エリート特攻','ボス特攻','魔物特攻(赤)','PVP特攻(青)','モンスト特攻(黄)'};
String[] b = new String[]{'片手剣','二刀流','槍','短剣','弓','頭','鎧','腕','足'};

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	const msg = message.content;
	if (msg === 'ping') {
		message.reply('pong');
	}
	/*
	if (msg === 'おはよ') {
		message.reply('うさぎ_(:3 」∠)');
	}
	*/
	if (msg.indexOf('おはよ') !== -1) {
		message.reply('うさぎ_(:3 」∠)_');
	}
	if (msg === 'こんにちは') {
		message.reply('わにわに_(:3 」∠)_');
	}
	if (msg === 'こんばんは') {
		message.reply('わにわに_(:3 」∠)_');
	}
	if (msg.indexOf('おやす') !== -1) {
		message.reply('ヴァルスミーレ');
	}

	if (msg === '召喚ボックス') {
		const rt = new Random();
		const rb = new Random();
		message.reply(t[rt.nextInt(6)]+' '+b[rb.nextInt(9)]+' '+'獲得!!');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

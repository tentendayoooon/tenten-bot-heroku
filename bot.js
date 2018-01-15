const Discord = require('discord.js');
const client = new Discord.Client();

const t = ['ノーマル特攻','エリート特攻','ボス特攻','魔物特攻(赤)','PVP特攻(青)','モンスト特攻(黄)'];
const b = ['片手剣','二刀流','槍','短剣','弓','頭','鎧','腕','足'];

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
		const toko = t[Math.floor(Math.random() * t.length)];
		const buki = b[Math.floor(Math.random() * b.length)];
		message.reply(toko+' '+buki+' '+'獲得!!');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

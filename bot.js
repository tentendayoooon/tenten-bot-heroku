const Discord = require('discord.js');
const client = new Discord.Client();

const a_toko = ['ノーマル特攻','エリート特攻','ボス特攻','魔物特攻(赤)','PVP特攻(青)','モンスト特攻(黄)'];
const a_buki = ['片手剣','二刀流','槍','短剣','弓','頭','鎧','腕','足'];
const a_sozai = ['HPポーション','MPポーション','ソウルショット','エリクサーエッセンス','各色の薬草','血の証','ページ：アブソリュートシールド','ページ：ヒーリングストライク','ルーンの欠片','アデナボックス（小）','アデナボックス','R～SRランクソウルストーン','武器強化スクロール','防具強化スクロール','装飾品強化スクロール','武器昇級石','防具昇級石','装飾品昇級石','祝福された武器強化スクロール','祝福された防具強化スクロール','祝福された装飾品強化スクロール','マーブルの加護'];

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
		const toko = a_toko[Math.floor(Math.random() * a_toko.length)];
		const buki = a_buki[Math.floor(Math.random() * a_buki.length)];
		message.reply(toko+' '+buki+' '+'獲得!!');
	}
	if (msg === '素材ボックス') {
		const sozai = a_sozai[Math.floor(Math.random() * a_sozai.length)];
		message.reply(sozai+' '+'獲得!!');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

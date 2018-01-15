const Discord = require('discord.js');
const client = new Discord.Client();

const a_toko = ['ノーマル特攻','エリート特攻','ボス特攻','魔物特攻(赤)','PVP特攻(青)','モンスト特攻(黄)'];
const a_buki = ['片手剣','二刀流','槍','短剣','弓','頭','鎧','腕','足'];
const a_sozai = ['HPポーション 1,000個','HPポーション 1個','MPポーション 1,000個','MPポーション 1個','ソウルショット　10,000個','ソウルショット　10個','HP エリクサーエッセンス','MP エリクサーエッセンス','攻撃力 エリクサーエッセンス','防御力 エリクサーエッセンス','赤色の薬草','青色の薬草','紫色の薬草','黄色の薬草','血の証 1,000個','血の証 1個','ページ：アブソリュートシールド','ページ：ヒーリングストライク','ルーンの欠片 1,000個','ルーンの欠片 1個','アデナボックス（小）','アデナボックス','N ランクソウルストーン','N ランクソウルストーン','HN ランクソウルストーン','R ランクソウルストーン','HR ランクソウルストーン','SR ランクソウルストーン','UR ランクソウルストーン','武器強化スクロール','防具強化スクロール','装飾品強化スクロール','武器昇級石','防具昇級石','装飾品昇級石','祝福された武器強化スクロール','祝福された防具強化スクロール','祝福された装飾品強化スクロール','マーブルの加護'];

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

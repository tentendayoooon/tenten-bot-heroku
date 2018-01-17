const Discord = require('discord.js');
const client = new Discord.Client();

const a_rank = ['HR','SR','UR'];
const a_toko = ['ノーマル特性','エリート特性','ボス特性','魔物特性(赤)','PVP特性(青)','モンスト特性(黄)'];
const a_buki = ['片手剣','二刀流','槍','短剣','弓','頭','鎧','腕','足'];
const a_sozai = ['HPポーション 1,000個','HPポーション 1個','MPポーション 1,000個','MPポーション 1個'
				,'ソウルショット　10,000個','ソウルショット　10個','HP エリクサーエッセンス','MP エリクサーエッセンス'
				,'攻撃力 エリクサーエッセンス','防御力 エリクサーエッセンス','赤色の薬草','青色の薬草','紫色の薬草'
				,'黄色の薬草','血の証 1,000個','血の証 1個','ページ：アブソリュートシールド','ページ：ヒーリングストライク'
				,'ルーンの欠片 1,000個','ルーンの欠片 1個','アデナボックス（小）','アデナボックス','N ランクソウルストーン'
				,'N ランクソウルストーン','HN ランクソウルストーン','R ランクソウルストーン','HR ランクソウルストーン'
				,'SR ランクソウルストーン','UR ランクソウルストーン','武器強化スクロール','防具強化スクロール'
				,'装飾品強化スクロール','武器昇級石','防具昇級石','装飾品昇級石','祝福された武器強化スクロール'
				,'祝福された防具強化スクロール','祝福された装飾品強化スクロール','マーブルの加護'
				,'ェビの天ぷら 3本','あいふんX 1台','天丼 1杯','茄子 1箱','トマト 1年分'];

const a_core = [];
	a_core['アール'] = 'グルーディン街道->オルマフム射手(Lv26)';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	if (message.author.equals(client.user)) return;
	let msg = message.content;

	if (msg === '!help') {
		// help表示
		let meshelp = 
			'\n!ping : pongを返信。' + 
			'\n*おはよ* : 朝の挨拶。' + 
			'\nこんにちは : 昼の挨拶。' + 
			'\nこんばんは : 夜の挨拶。' + 
			'\n*おやす* : おやすみの挨拶。' + 
			'\n合成 : どんな装備ができるかな？' + 
			'\n素材 : どんな素材が出るかな？' +
			''
		;
		message.reply(meshelp);
	}

	if (msg === '!ping') {
		message.reply('!pong');
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

	if (msg === '合成') {
		let rank = a_rank[Math.floor(Math.random() * a_rank.length)];
		let toko = a_toko[Math.floor(Math.random() * a_toko.length)];
		let buki = a_buki[Math.floor(Math.random() * a_buki.length)];
		message.reply(rank+" ランクの "+toko+' '+buki+' 完成 !!');
	}
	if (msg === '素材') {
		let sozai = a_sozai[Math.floor(Math.random() * a_sozai.length)];
		message.reply(sozai+' 獲得 !!');
	}

	if (msg.indexOf('！コア') === 0) {
		const prefix = '！';
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
  		const command = args.shift().toLowerCase();
		let monster = args[0];
		console.log(a_core[monster]);
		if (a_core[monster] == undefined)
		{
			message.reply('敵の名前を間違えてます。');
		}
		else
		{
			message.reply(a_core[monster]);
		}
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

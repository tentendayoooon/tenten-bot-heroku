const Discord = require('discord.js');
const client = new Discord.Client();

//#region 武器合成配列
const a_rank = ['HR','SR','UR'];
const a_toko = ['ノーマル特性','エリート特性','ボス特性','魔物特性(赤)','PVP特性(青)','モンスト特性(黄)'];
const a_buki = ['片手剣','二刀流','槍','短剣','弓','頭','鎧','腕','足'];
//#endregion

//#region 素材配列
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
//#endregion

//#region コア集め配列
const a_core = [];
	a_core['ウルカー'] = '話せる島東部->オーク名射手(Lv12)';
	a_core['クイーンシルロップ'] = '話せる島東部->巨大廃墟グモ(Lv7)';
	a_core['コバカ'] = '話せる島東部->オーク歩兵(Lv12)';
	a_core['シルバーホーン'] = '話せる島東部->大角アンテロープ(Lv４)';
	a_core['ブラックティス'] = '話せる島東部->身軽な黒狼(Lv7)';
	a_core['キングベイン'] = '話せる島西部->森林毒グモ(Lv18)';
	a_core['スティング'] = '話せる島西部->森林スズメバチ(Lv15)';
	a_core['タカ'] = '話せる島西部->オーク狂戦士(Lv16)';
	a_core['レッドルーズ'] = '話せる島西部->赤毛狐の精霊守(Lv18)';
	a_core['精霊の守り人'] = '話せる島西部->精霊の守り人(Lv20)';
	a_core['アール'] = 'グルーディン街道->オルマフム射手(Lv26)';
	a_core['オルバル'] = 'グルーディン街道->オルマフム剣士(Lv25)';
	a_core['ケイナイン'] = 'グルーディン街道->クーガー(Lv21)';
	a_core['ゾディアック'] = 'グルーディン街道->ゾディアック(Lv29)';
	a_core['フレキ'] = 'グルーディン街道->極悪ウェアウルフ(Lv21)';
	a_core['メルビル'] = 'グルーディン街道->骸骨兵士(Lv22)';
	a_core['モレティ'] = 'グルーディン街道->恨みの骸骨弓使い(Lv24)';
	a_core['カクトゥス'] = 'グルーディオ平原->メル族人狩り兵(Lv30)';
	a_core['コックス'] = 'グルーディオ平原->メル族呪術師(Lv35)';
	a_core['コトス'] = 'グルーディオ平原->メル族偵察兵(Lv35)';
	a_core['シルバービアード'] = 'グルーディオ平原->シルバービアード(Lv40)';
	a_core['ドゥームフェイス'] = 'グルーディオ平原->ダークウィーバー(Lv32)';
	a_core['トゥレカ'] = 'グルーディオ平原->トゥレック護衛(Lv37)';
	a_core['ビッグハンド'] = 'グルーディオ平原->極悪ヒグマ(Lv30)';
	a_core['ヴェパー'] = 'ウィンダウッド荘園->ヴェパー(Lv52)';
	a_core['シャイニングティス'] = 'ウィンダウッド荘園->堕落したスナイプ(Lv44)';
	a_core['シャドウウィング'] = 'ウィンダウッド荘園->吸血コウモリ(Lv38)';
	a_core['トロカ'] = 'ウィンダウッド荘園->トゥレック突撃兵(Lv46)(Lv38)';
	a_core['フカ'] = 'ウィンダウッド荘園->トゥレック射手(Lv46)';
	a_core['ホワイトティス'] = 'ウィンダウッド荘園->トゥレックの暴れ犬(Lv46)';
	a_core['ルーインワンダラー'] = 'ウィンダウッド荘園->ソウルスラッシャー(Lv40)';
	a_core['カジール'] = '荒地->カジール(Lv62)';
	a_core['グラインダー'] = '荒地->変異した虫の闘士(Lv54)';
	a_core['サンドアイ'] = '荒地->フローティングアイ追跡者(Lv50)';
	a_core['サンドハーツ'] = '荒地->砂漠のサハラ(Lv54)';
	a_core['ストーンハーツ'] = '荒地->灰岩石ゴーレム(Lv54)';
	a_core['ポインター'] = '荒地->変異した虫(Lv52)';
	a_core['レッドロック'] = '荒地->荒地バジリスク(Lv52)';
	a_core['砂の潜伏者'] = '荒地->ジャイアントリーチ(Lv54)';
	a_core['クラッシュ'] = 'ディオン牧草地->レット族警備兵(Lv66)';
	a_core['スクリッシュ'] = 'ディオン牧草地->レット族呪術師(Lv66)';
	a_core['スラッシュ'] = 'ディオン牧草地->レットリザードマン(Lv62)';
	a_core['バラシュ'] = 'ディオン牧草地->レット族弓使い(Lv62)';
	a_core['バロク'] = 'ディオン牧草地->ブレカ捜索兵(Lv62)';
	a_core['ブルク'] = 'ディオン牧草地->ブレカ潜入兵(Lv70)';
	a_core['フレゴン'] = 'ディオン牧草地->フレゴン(Lv-)';
	a_core['モーク'] = 'ディオン牧草地->ブレカ突撃兵(Lv70)';
	a_core['アルケイン'] = 'クルマ湿地->闇黒聖歌団プリマ(Lv90)';
	a_core['シス'] = 'クルマ湿地->シス(Lv-)';
	a_core['ゼルナ'] = 'クルマ湿地->沼スタッカート奴隷(Lv84)';
	a_core['モーガン'] = 'クルマ湿地->湿地の暗殺者(Lv84)';
	a_core['リスト'] = 'クルマ湿地->骸骨追撃兵(Lv78)';
	a_core['ロンドゥ'] = 'クルマ湿地->骸骨偵察兵(Lv78)';
	a_core['アマデウス'] = '闘争の峰->アマデウス(Lv-)';
	a_core['オルバカン'] = '闘争の峰->オルマフム突撃兵(Lv100)';
	a_core['タータン'] = '闘争の峰->タノール歩哨(Lv90)';
	a_core['タールアタン'] = '闘争の峰->カンクンの精鋭(Lv94)';
	a_core['ツタン'] = '闘争の峰->タノール祭司長(Lv94)';
	a_core['峰の襲撃者'] = '闘争の峰->黒ヒョウ(Lv90)';
	a_core['カウボーイ'] = '絶叫の地->蘇った怨霊(Lv112)';
	a_core['シムトラスト'] = '絶叫の地->執念の怨霊(Lv116)';
	a_core['ジョナサン'] = '絶叫の地->ドゥームサーバント(Lv112)';
	a_core['スクリーマー'] = '絶叫の地->苦痛のマンドラゴラ(Lv104)';
	a_core['スクリーミングエント'] = '絶叫の地->不吉なウィロー(Lv112)';
	a_core['バルサザール'] = '絶叫の地->死霊ネールカス(Lv116)';
	a_core['フローラ'] = '絶叫の地->悲嘆のディコール(Lv104)';
	a_core['エレン'] = 'ギラン自治領->メデューサ(Lv124)';
	a_core['シャコス'] = 'ギラン自治領->ランク族闘士(Lv132)';
	a_core['ステノア'] = 'ギラン自治領->(フィールドボス)';
	a_core['ダックス'] = 'ギラン自治領->ランク族上位呪術師(Lv132)';
	a_core['テス'] = 'ギラン自治領->ランク族訓練兵(Lv132)';
	a_core['ビル'] = 'ギラン自治領->監視するウォーム(Lv124)';
	a_core['ラティコス'] = 'ギラン自治領->ランク族兵士(Lv132)';
	a_core['ルース'] = 'ギラン自治領->ランク族捜索兵(Lv132)';
	a_core['アルフォンス'] = '死霧の海岸->難破船の海賊ゾンビ(Lv140)';
	a_core['ヘクター'] = '死霧の海岸->下巨人の創造物(Lv140)';
	a_core['ホルスト'] = '死霧の海岸->陰鬱な叫び(Lv140)';
	a_core['メデス'] = '死霧の海岸->退化した下巨人(Lv132)';
	a_core['ルール'] = '死霧の海岸->オルマフム盗賊団指揮官(Lv136)';
	a_core['ルカ'] = '死霧の海岸->悩める下巨人(Lv140)';
	a_core['アルバート'] = '悪魔の島->ザケン海賊団の甲板長(Lv156)';
	a_core['ジェイプ'] = '悪魔の島->ザケン海賊団の操舵手(Lv156)';
	a_core['ボーンスティング'] = '悪魔の島->ケイブスコーピオン(Lv156)';
	a_core['ルア'] = '悪魔の島->リーサルダークサキュバス(Lv150)';
	a_core['アガレス'] = '死の沿道->ダストウィンド(Lv168)';
	a_core['ヴィルヘルム'] = '死の沿道->渓谷ウィンドスース(Lv162)';
	a_core['ウンバ'] = '死の沿道->グランディスの圧砕者(Lv168)';
	a_core['ゴルク'] = '死の沿道->バレーブレカ将軍(Lv162)';
	a_core['ジェイソン'] = '死の沿道->彷徨うクリムゾンバインド(Lv168)';
	a_core['ベロク'] = '死の沿道->バーレブレカ呪術師(Lv162)';
	a_core['ラボルラース'] = '死の沿道->デスデュラハン(Lv180)';
	a_core['アラクネ'] = 'エルフの塔１階->地底鉄グモ(Lv25)';
	a_core['ホラーウィング'] = 'エルフの塔１階->ファングバット(Lv20)';
	a_core['リカオン'] = 'エルフの塔１階->ウェアウルフ(Lv20)';
	a_core['デスゲイザー'] = 'エルフの塔２階->ウォッチャー(Lv31)';
	a_core['ネクロス'] = 'エルフの塔２階->シェイパー(Lv35)';
	a_core['フィラクス'] = 'エルフの塔２階->スパルトイ追撃者(Lv27)';
	a_core['マニアクス'] = 'エルフの塔２階->スパルトイ狂戦士(Lv26)';
	a_core['アリの巣の監督官'] = 'アリの巣地下１階->働きアリ隊長(Lv50)';
	a_core['リバー'] = 'アリの巣地下１階->兵隊アリの幼虫(Lv36)';
	a_core['アリの巣親衛隊長'] = 'アリの巣地下２階->衛兵アリ(Lv78)';
	a_core['産卵地の管理人'] = 'アリの巣地下２階->雄アリのリーダー(Lv84)';
	a_core['ステレオス'] = 'クルマの塔２階->ポルタ(Lv90)';
	a_core['セルボプライム'] = 'クルマの塔２階->サセプタープライム(Lv104)(Lv108)';
	a_core['マスターモルデオ'] = 'クルマの塔２階->モルデオの親衛隊(Lv94)';
	a_core['ミスティック'] = 'クルマの塔２階->エックスクロ(Lv84)';
	a_core['グリジョ'] = 'クルマの塔３階->バルディウス警備兵(Lv112)';
	a_core['マグヌス'] = 'クルマの塔３階->ロルカ(Lv128)';
	a_core['ユリウス'] = 'クルマの塔３階->メフォルテ(Lv120)';
	a_core['コルピオ'] = '象牙の塔１階->汚れたスコーピオン(Lv136)';
	a_core['プレタ'] = '象牙の塔１階->汚れたプレモ(Lv146)';
	a_core['マシンプ'] = '象牙の塔１階->汚れたファングス(Lv132)';
	a_core['ガルグ'] = '象牙の塔２階->強化ガーゴイル(Lv156)';
	a_core['バルチャー'] = '象牙の塔２階->スタッカートソルジャー(Lv150)';
	a_core['モルペウス'] = '象牙の塔２階->強化ペルーン(Lv162)';
	a_core['スカルチェイサー'] = '象牙の塔３階->骸骨突撃兵(Lv168)';
	a_core['クリアテス'] = '象牙の塔３階->ダークジェネラル(Lv174)';
	a_core['サンドストーム'] = '象牙の塔３階->ケイブサハラ(Lv182)';
	a_core['クイーンアント'] = '血盟ダンジョン->クイーンアント(Lv-)';
	a_core['バールカルロン'] = '血盟ダンジョン->バールカルロン(Lv-)';
	a_core['クルマコア'] = '血盟ダンジョン->クルマコア(Lv-)';
	a_core['トリシャ'] = '次元の迷路->トリシャ(Lv-)';
	a_core['ラモグ'] = '次元の迷路->ラモグ(Lv-)';
//#endregion

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

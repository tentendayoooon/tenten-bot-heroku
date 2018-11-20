const Discord = require('discord.js');
const client = new Discord.Client();

//#region ガチャ配列
const a_Gacha_Rare5 = [
		 '[キャラクター] ★★★★★ ミコト https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121315_i.png'
		,'[キャラクター] ★★★★★ エゼリット https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121316_i.png'
		,'[キャラクター] ★★★★★ アレクシス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121318_i.png'
		,'[キャラクター] ★★★★★ ザインフラッド https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121320_i.png'
		,'[キャラクター] ★★★★★ ホーク https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121321_i.png'
		,'[キャラクター] ★★★★★ メリィベル https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121322_i.png'
		,'[キャラクター] ★★★★★ ジュリエッタ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121323_i.png'
		,'[キャラクター] ★★★★★ ヒルデガルド https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121324_i.png'
		,'[キャラクター] ★★★★★ ネファリエ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121325_i.png'
		,'[キャラクター] ★★★★★ リリィ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122589_i.png'
		,'[キャラクター] ★★★★★ ハロウィンエルフィリス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123593_i.png'
		,'[キャラクター] ★★★★★ ナジャーフ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/126557_i.png'
		,'[キャラクター] ★★★★★ ルイーゼ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/130491_i.png'

		,'[ドラゴン] ★★★★★ アグニ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121373_i.png'
		,'[ドラゴン] ★★★★★ ワキヤン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121376_i.png'
		,'[ドラゴン] ★★★★★ リヴァイアサン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122626_i.png'
		,'[ドラゴン] ★★★★★ ポセイドン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121374_i.png'
		,'[ドラゴン] ★★★★★ ジャンヌダルク https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121377_i.png'
		,'[ドラゴン] ★★★★★ ニーズヘッグ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121378_i.png'
		,'[ドラゴン] ★★★★★ ペレ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122594_i.png'
		,'[ドラゴン] ★★★★★ ケルベロス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/126923_i.png'
		,'[ドラゴン] ★★★★★ シルヴィア https://gamewith.akamaized.net/article_tools/dragalialost/gacha/127086_i.png'
		,'[ドラゴン] ★★★★★ 真ミドガルズオルム https://gamewith.akamaized.net/img/37fad0b9ce57d7840cabcbc21ef5f024.jpg'
		,'[ドラゴン] ★★★★★ ガルーダ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/130493_i.png'

		,'[竜輝の護符] ★★★★★ ブレイジング・クラウン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121409_i.png'
		,'[竜輝の護符] ★★★★★ ゴージャス・パーティ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121412_i.png'
		,'[竜輝の護符] ★★★★★ ケガは私が治します https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121417_i.png'
		,'[竜輝の護符] ★★★★★ 好敵手 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121413_i.png'
		,'[竜輝の護符] ★★★★★ リュカのイタズラ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121416_i.png'
		,'[竜輝の護符] ★★★★★ ハンティングナイト https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121419_i.png'
		,'[竜輝の護符] ★★★★★ 聖なる祈り https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121414_i.png'
		,'[竜輝の護符] ★★★★★ スイーツパイレーツ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123806_i.png'
		,'[竜輝の護符] ★★★★★ 鬼教官のエール https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122632_i.png'
		,'[竜輝の護符] ★★★★★ 天才の閃き https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121410_i.png'
		,'[竜輝の護符] ★★★★★ クリスタリアの少女 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122631_i.png'
		,'[竜輝の護符] ★★★★★ レヴィオンの英雄 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121418_i.png'
		,'[竜輝の護符] ★★★★★ ハロウィン・ウィッチ・クラフト https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123804_i.png'
		,'[竜輝の護符] ★★★★★ ドラゴンの血族 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121415_i.png'
		,'[竜輝の護符] ★★★★★ トリック・トリート・トリック https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123805_i.png'
		,'[竜輝の護符] ★★★★★ テンペストグローリー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/124316_i.png'
		,'[竜輝の護符] ★★★★★ 宝石と剣 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/127017_i.png'
		,'[竜輝の護符] ★★★★★ クラウの策略 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/127018_i.png'
];

const a_Gacha_Rare4 = [
		 '[キャラクター] ★★★★ カール https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121326_i.png'
		,'[キャラクター] ★★★★ ヴァネッサ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121327_i.png'
		,'[キャラクター] ★★★★ ウェルシェラ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121328_i.png'
		,'[キャラクター] ★★★★ ルタ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121329_i.png'
		,'[キャラクター] ★★★★ カーリナ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121330_i.png'
		,'[キャラクター] ★★★★ セイナー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121331_i.png'
		,'[キャラクター] ★★★★ ムサシ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121332_i.png'
		,'[キャラクター] ★★★★ エイル https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121333_i.png'
		,'[キャラクター] ★★★★ エレオノーラ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121334_i.png'
		,'[キャラクター] ★★★★ リョウゼン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121335_i.png'
		,'[キャラクター] ★★★★ ウルガ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121336_i.png'
		,'[キャラクター] ★★★★ アマネ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121337_i.png'
		,'[キャラクター] ★★★★ ベルザーク https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121338_i.png'
		,'[キャラクター] ★★★★ オリオン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121339_i.png'
		,'[キャラクター] ★★★★ クレイマン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121340_i.png'
		,'[キャラクター] ★★★★ クラウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122106_i.png'
		,'[キャラクター] ★★★★ ユーディル（主人公） https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122102_i.png'
		,'[キャラクター] ★★★★ リュカ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122105_i.png'
		,'[キャラクター] ★★★★ エルフィリス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122110_i.png'
		,'[キャラクター] ★★★★ ランザーヴ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122101_i.png'
		,'[キャラクター] ★★★★ セリエラ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122087_i.png'
		,'[キャラクター] ★★★★ オルセム https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122622_i.png'
		,'[キャラクター] ★★★★ ハロウィンイルテミア https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123594_i.png'
		,'[キャラクター] ★★★★ メルサ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/126556_i.png'
		,'[キャラクター] ★★★★ シノア https://gamewith.akamaized.net/article_tools/dragalialost/gacha/126911_i.png'
		,'[キャラクター] ★★★★ ルーエン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/130492_i.png'

		,'[ドラゴン] ★★★★ フェニックス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121379_i.png'
		,'[ドラゴン] ★★★★ イフリート https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121380_i.png'
		,'[ドラゴン] ★★★★ ポリアフ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121382_i.png'
		,'[ドラゴン] ★★★★ ヴォジャノーイ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121383_i.png'
		,'[ドラゴン] ★★★★ フォーゲル https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121384_i.png'
		,'[ドラゴン] ★★★★ リンドヴルム https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121387_i.png'
		,'[ドラゴン] ★★★★ ジャガーノート https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121388_i.png'
		,'[ドラゴン] ★★★★ ハロウィンシルキー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123801_i.png'
		,'[ドラゴン] ★★★★ ストリボーグ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121385_i.png'
		,'[ドラゴン] ★★★★ ユニコーン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121386_i.png'
		,'[ドラゴン] ★★★★ シルキー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121389_i.png'
		,'[ドラゴン] ★★★★ ゾディアーク https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122250_i.png'
		,'[ドラゴン] ★★★★ ブリュンヒルデ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122249_i.png'
		,'[ドラゴン] ★★★★ マーキュリー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122248_i.png'
		,'[ドラゴン] ★★★★ ミドガルズオルム https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122247_i.png'
		,'[ドラゴン] ★★★★ ユピテル https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122246_i.png'

		,'[竜輝の護符] ★★★★ 百刃繚乱 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121420_i.png'
		,'[竜輝の護符] ★★★★ 戦場のふたり https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121440_i.png'
		,'[竜輝の護符] ★★★★ デンジャラスビューティ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122958_i.png'
		,'[竜輝の護符] ★★★★ セクシー・スナイパー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121422_i.png'
		,'[竜輝の護符] ★★★★ 在りし日の幸せ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121441_i.png'
		,'[竜輝の護符] ★★★★ 研究成果の新魔術 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121436_i.png'
		,'[竜輝の護符] ★★★★ 運命の救済 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121421_i.png'
		,'[竜輝の護符] ★★★★ この身は影となりて https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121433_i.png'
		,'[竜輝の護符] ★★★★ 楽しき命懸けの戦 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121434_i.png'
		,'[竜輝の護符] ★★★★ 王の威厳 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121429_i.png'
		,'[竜輝の護符] ★★★★ 手がかかるんだから！ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121431_i.png'
		,'[竜輝の護符] ★★★★ ここは退却しましょう！ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121432_i.png'
		,'[竜輝の護符] ★★★★ 鍛冶屋三姉妹の絆 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121437_i.png'
		,'[竜輝の護符] ★★★★ ダンス・ダンス・バトル！ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121438_i.png'
		,'[竜輝の護符] ★★★★ アツアツ女子会 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121424_i.png'
		,'[竜輝の護符] ★★★★ 雨空の思い出 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121423_i.png'
		,'[竜輝の護符] ★★★★ 我らが知恵袋 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121425_i.png'
		,'[竜輝の護符] ★★★★ サバイバルデイズ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121426_i.png'
		,'[竜輝の護符] ★★★★ 未知への一歩 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121430_i.png'
		,'[竜輝の護符] ★★★★ シルキーのお手伝い https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123803_i.png'
		,'[竜輝の護符] ★★★★ 天空の覇者 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121427_i.png'
		,'[竜輝の護符] ★★★★ 甲冑師の大望 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121435_i.png'
		,'[竜輝の護符] ★★★★ 聖騎士の守り https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122721_i.png'
		,'[竜輝の護符] ★★★★ 五竜の咆哮：ミドガルズオルム https://gamewith.akamaized.net/article_tools/dragalialost/gacha/124311_i.png'
		,'[竜輝の護符] ★★★★ 五竜の咆哮：マーキュリー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/124312_i.png'
		,'[竜輝の護符] ★★★★ 五竜の咆哮：ブリュンヒルデ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/124313_i.png'
		,'[竜輝の護符] ★★★★ 五竜の咆哮：ユピテル https://gamewith.akamaized.net/article_tools/dragalialost/gacha/124314_i.png'
		,'[竜輝の護符] ★★★★ 五竜の咆哮：ゾディアーク https://gamewith.akamaized.net/article_tools/dragalialost/gacha/124315_i.png'
		,'[竜輝の護符] ★★★★ サムライたちの休息 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/127015_i.png'
		,'[竜輝の護符] ★★★★ 鮮烈なコンビネーション https://gamewith.akamaized.net/article_tools/dragalialost/gacha/127056_i.png'
];

const a_Gacha_Rare3 = [
		 '[キャラクター] ★★★ アオイ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121341_i.png'
		,'[キャラクター] ★★★ ラシーヌ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121343_i.png'
		,'[キャラクター] ★★★ アラン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121344_i.png'
		,'[キャラクター] ★★★ ジョー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121345_i.png'
		,'[キャラクター] ★★★ サニア https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121346_i.png'
		,'[キャラクター] ★★★ オーレイン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121347_i.png'
		,'[キャラクター] ★★★ シャーディ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121348_i.png'
		,'[キャラクター] ★★★ ジュウロウタ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121349_i.png'
		,'[キャラクター] ★★★ レックス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121350_i.png'
		,'[キャラクター] ★★★ シュベール https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121351_i.png'
		,'[キャラクター] ★★★ ウェイク https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121352_i.png'
		,'[キャラクター] ★★★ リカート https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121353_i.png'
		,'[キャラクター] ★★★ メロディ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121354_i.png'
		,'[キャラクター] ★★★ フランチェスカ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121355_i.png'
		,'[キャラクター] ★★★ イハンナ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121356_i.png'
		,'[キャラクター] ★★★ フィリア https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121357_i.png'
		,'[キャラクター] ★★★ ニコラ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121358_i.png'
		,'[キャラクター] ★★★ ソフィ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121359_i.png'
		,'[キャラクター] ★★★ ライムンド https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121360_i.png'
		,'[キャラクター] ★★★ イルファン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121361_i.png'
		,'[キャラクター] ★★★ ライナス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121362_i.png'
		,'[キャラクター] ★★★ マルカ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121363_i.png'
		,'[キャラクター] ★★★ マローラ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121364_i.png'
		,'[キャラクター] ★★★ ホープ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121365_i.png'
		,'[キャラクター] ★★★ エステル https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121366_i.png'
		,'[キャラクター] ★★★ ロドリゴ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121367_i.png'
		,'[キャラクター] ★★★ タロウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121368_i.png'
		,'[キャラクター] ★★★ ワイス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121369_i.png'
		,'[キャラクター] ★★★ エリック https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121370_i.png'
		,'[キャラクター] ★★★ イルテミア https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121371_i.png'
		,'[キャラクター] ★★★ エドワード https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121372_i.png'
		,'[キャラクター] ★★★ ジーズ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122623_i.png'
		,'[キャラクター] ★★★ ハロウィンエドワード https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123595_i.png'
		,'[キャラクター] ★★★ ヴィッテ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/126914_i.png'
		,'[キャラクター] ★★★ ピドット https://gamewith.akamaized.net/article_tools/dragalialost/gacha/130509_i.png'

		,'[ドラゴン] ★★★ ホムラリュウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121390_i.png'
		,'[ドラゴン] ★★★ フブキリュウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121393_i.png'
		,'[ドラゴン] ★★★ ツムジリュウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121396_i.png'
		,'[ドラゴン] ★★★ ヒナタリュウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121399_i.png'
		,'[ドラゴン] ★★★ ヒカゲリュウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121402_i.png'
		,'[ドラゴン] ★★★ バーンドラコ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121391_i.png'
		,'[ドラゴン] ★★★ アイスドラコ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121394_i.png'
		,'[ドラゴン] ★★★ ウインドラコ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121397_i.png'
		,'[ドラゴン] ★★★ ムーンドラコ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121400_i.png'
		,'[ドラゴン] ★★★ ダークドラコ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121403_i.png'
		,'[ドラゴン] ★★★ キャンドルインプ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121392_i.png'
		,'[ドラゴン] ★★★ ウェルインプ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121395_i.png'
		,'[ドラゴン] ★★★ エアリアルインプ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121398_i.png'
		,'[ドラゴン] ★★★ スターインプ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121401_i.png'
		,'[ドラゴン] ★★★ グレイヴインプ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121404_i.png'

		,'[竜輝の護符] ★★★ 「グリモルス・デクス」写本 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121463_i.png'
		,'[竜輝の護符] ★★★ アルベリア国旗 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121447_i.png'
		,'[竜輝の護符] ★★★ 破天の角笛 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121448_i.png'
		,'[竜輝の護符] ★★★ つわものたちの夢の跡 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121462_i.png'
		,'[竜輝の護符] ★★★ 聖光輪 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121443_i.png'
		,'[竜輝の護符] ★★★ セントロータスの風 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121458_i.png'
		,'[竜輝の護符] ★★★ ドラゴンの寝床 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121454_i.png'
		,'[竜輝の護符] ★★★ 名馬スカービット https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121442_i.png'
		,'[竜輝の護符] ★★★ ティータイム https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121444_i.png'
		,'[竜輝の護符] ★★★ バラドンナの花 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121445_i.png'
		,'[竜輝の護符] ★★★ 頂に吼える牙 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121450_i.png'
		,'[竜輝の護符] ★★★ 八つ葉のクローバー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121460_i.png'
		,'[竜輝の護符] ★★★ 《結社》の仮面 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121451_i.png'
		,'[竜輝の護符] ★★★ 遙かなる霊峰 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121452_i.png'
		,'[竜輝の護符] ★★★ 森と湖の歌声 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121453_i.png'
		,'[竜輝の護符] ★★★ 秘伝の書 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121455_i.png'
		,'[竜輝の護符] ★★★ 鉄騎兵の盾 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121457_i.png'
		,'[竜輝の護符] ★★★ アロマポット https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121459_i.png'
		,'[竜輝の護符] ★★★ 禁じられた遺物 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121461_i.png'
		,'[竜輝の護符] ★★★ 闇夜の通告 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121464_i.png'
		,'[竜輝の護符] ★★★ 明日への轍 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121466_i.png'
		,'[竜輝の護符] ★★★ 聖草ポーションハーブ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121467_i.png'
		,'[竜輝の護符] ★★★ 溶けない氷 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121468_i.png'
		,'[竜輝の護符] ★★★ パンプキンボックス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123802_i.png'
		,'[竜輝の護符] ★★★ 過ぎ去りし日の王冠 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122959_i.png'
		,'[竜輝の護符] ★★★ お出かけの日のとっておき https://gamewith.akamaized.net/article_tools/dragalialost/gacha/127014_i.png'
];

/*
const a_Gacha = [

     '[キャラクター] ★★★★★ ミコト https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121315_i.png'
    ,'[キャラクター] ★★★★★ エゼリット https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121316_i.png'
    ,'[キャラクター] ★★★★★ アレクシス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121318_i.png'
    ,'[キャラクター] ★★★★★ ザインフラッド https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121320_i.png'
    ,'[キャラクター] ★★★★★ ホーク https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121321_i.png'
    ,'[キャラクター] ★★★★★ メリィベル https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121322_i.png'
    ,'[キャラクター] ★★★★★ ジュリエッタ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121323_i.png'
    ,'[キャラクター] ★★★★★ ヒルデガルド https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121324_i.png'
    ,'[キャラクター] ★★★★★ ネファリエ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121325_i.png'
    ,'[キャラクター] ★★★★★ リリィ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122589_i.png'
    ,'[キャラクター] ★★★★★ ハロウィンエルフィリス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123593_i.png'
    ,'[キャラクター] ★★★★★ ナジャーフ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/126557_i.png'
    ,'[キャラクター] ★★★★ カール https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121326_i.png'
    ,'[キャラクター] ★★★★ ヴァネッサ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121327_i.png'
    ,'[キャラクター] ★★★★ ウェルシェラ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121328_i.png'
    ,'[キャラクター] ★★★★ ルタ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121329_i.png'
    ,'[キャラクター] ★★★★ カーリナ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121330_i.png'
    ,'[キャラクター] ★★★★ セイナー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121331_i.png'
    ,'[キャラクター] ★★★★ ムサシ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121332_i.png'
    ,'[キャラクター] ★★★★ エイル https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121333_i.png'
    ,'[キャラクター] ★★★★ エレオノーラ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121334_i.png'
    ,'[キャラクター] ★★★★ リョウゼン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121335_i.png'
    ,'[キャラクター] ★★★★ ウルガ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121336_i.png'
    ,'[キャラクター] ★★★★ アマネ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121337_i.png'
    ,'[キャラクター] ★★★★ ベルザーク https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121338_i.png'
    ,'[キャラクター] ★★★★ オリオン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121339_i.png'
    ,'[キャラクター] ★★★★ クレイマン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121340_i.png'
    ,'[キャラクター] ★★★★ クラウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122106_i.png'
    ,'[キャラクター] ★★★★ ユーディル（主人公） https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122102_i.png'
    ,'[キャラクター] ★★★★ リュカ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122105_i.png'
    ,'[キャラクター] ★★★★ エルフィリス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122110_i.png'
    ,'[キャラクター] ★★★★ ランザーヴ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122101_i.png'
    ,'[キャラクター] ★★★★ セリエラ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122087_i.png'
    ,'[キャラクター] ★★★★ オルセム https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122622_i.png'
    ,'[キャラクター] ★★★★ ハロウィンイルテミア https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123594_i.png'
    ,'[キャラクター] ★★★★ メルサ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/126556_i.png'
    ,'[キャラクター] ★★★★ シノア https://gamewith.akamaized.net/article_tools/dragalialost/gacha/126911_i.png'
    ,'[キャラクター] ★★★ アオイ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121341_i.png'
    ,'[キャラクター] ★★★ ラシーヌ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121343_i.png'
    ,'[キャラクター] ★★★ アラン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121344_i.png'
    ,'[キャラクター] ★★★ ジョー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121345_i.png'
    ,'[キャラクター] ★★★ サニア https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121346_i.png'
    ,'[キャラクター] ★★★ オーレイン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121347_i.png'
    ,'[キャラクター] ★★★ シャーディ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121348_i.png'
    ,'[キャラクター] ★★★ ジュウロウタ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121349_i.png'
    ,'[キャラクター] ★★★ レックス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121350_i.png'
    ,'[キャラクター] ★★★ シュベール https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121351_i.png'
    ,'[キャラクター] ★★★ ウェイク https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121352_i.png'
    ,'[キャラクター] ★★★ リカート https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121353_i.png'
    ,'[キャラクター] ★★★ メロディ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121354_i.png'
    ,'[キャラクター] ★★★ フランチェスカ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121355_i.png'
    ,'[キャラクター] ★★★ イハンナ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121356_i.png'
    ,'[キャラクター] ★★★ フィリア https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121357_i.png'
    ,'[キャラクター] ★★★ ニコラ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121358_i.png'
    ,'[キャラクター] ★★★ ソフィ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121359_i.png'
    ,'[キャラクター] ★★★ ライムンド https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121360_i.png'
    ,'[キャラクター] ★★★ イルファン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121361_i.png'
    ,'[キャラクター] ★★★ ライナス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121362_i.png'
    ,'[キャラクター] ★★★ マルカ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121363_i.png'
    ,'[キャラクター] ★★★ マローラ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121364_i.png'
    ,'[キャラクター] ★★★ ホープ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121365_i.png'
    ,'[キャラクター] ★★★ エステル https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121366_i.png'
    ,'[キャラクター] ★★★ ロドリゴ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121367_i.png'
    ,'[キャラクター] ★★★ タロウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121368_i.png'
    ,'[キャラクター] ★★★ ワイス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121369_i.png'
    ,'[キャラクター] ★★★ エリック https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121370_i.png'
    ,'[キャラクター] ★★★ イルテミア https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121371_i.png'
    ,'[キャラクター] ★★★ エドワード https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121372_i.png'
    ,'[キャラクター] ★★★ ジーズ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122623_i.png'
    ,'[キャラクター] ★★★ ハロウィンエドワード https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123595_i.png'
    ,'[キャラクター] ★★★ ヴィッテ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/126914_i.png'
    ,'[キャラクター] ★★★★★ ルイーゼ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/130491_i.png'
    ,'[キャラクター] ★★★★ ルーエン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/130492_i.png'
    ,'[キャラクター] ★★★ ピドット https://gamewith.akamaized.net/article_tools/dragalialost/gacha/130509_i.png'
	
	,'[ドラゴン] ★★★★★ アグニ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121373_i.png'
	,'[ドラゴン] ★★★★★ ワキヤン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121376_i.png'
	,'[ドラゴン] ★★★★★ リヴァイアサン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122626_i.png'
	,'[ドラゴン] ★★★★★ ポセイドン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121374_i.png'
	,'[ドラゴン] ★★★★★ ジャンヌダルク https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121377_i.png'
	,'[ドラゴン] ★★★★★ ニーズヘッグ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121378_i.png'
	,'[ドラゴン] ★★★★★ ペレ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122594_i.png'
	,'[ドラゴン] ★★★★★ ケルベロス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/126923_i.png'
	,'[ドラゴン] ★★★★★ シルヴィア https://gamewith.akamaized.net/article_tools/dragalialost/gacha/127086_i.png'
	,'[ドラゴン] ★★★★★ 真ミドガルズオルム https://gamewith.akamaized.net/img/37fad0b9ce57d7840cabcbc21ef5f024.jpg'
	,'[ドラゴン] ★★★★ フェニックス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121379_i.png'
	,'[ドラゴン] ★★★★ イフリート https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121380_i.png'
	,'[ドラゴン] ★★★★ ポリアフ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121382_i.png'
	,'[ドラゴン] ★★★★ ヴォジャノーイ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121383_i.png'
	,'[ドラゴン] ★★★★ フォーゲル https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121384_i.png'
	,'[ドラゴン] ★★★★ リンドヴルム https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121387_i.png'
	,'[ドラゴン] ★★★★ ジャガーノート https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121388_i.png'
	,'[ドラゴン] ★★★★ ハロウィンシルキー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123801_i.png'
	,'[ドラゴン] ★★★★ ストリボーグ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121385_i.png'
	,'[ドラゴン] ★★★★ ユニコーン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121386_i.png'
	,'[ドラゴン] ★★★★ シルキー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121389_i.png'
	,'[ドラゴン] ★★★★ ゾディアーク https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122250_i.png'
	,'[ドラゴン] ★★★★ ブリュンヒルデ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122249_i.png'
	,'[ドラゴン] ★★★★ マーキュリー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122248_i.png'
	,'[ドラゴン] ★★★★ ミドガルズオルム https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122247_i.png'
	,'[ドラゴン] ★★★★ ユピテル https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122246_i.png'
	,'[ドラゴン] ★★★ ホムラリュウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121390_i.png'
	,'[ドラゴン] ★★★ フブキリュウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121393_i.png'
	,'[ドラゴン] ★★★ ツムジリュウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121396_i.png'
	,'[ドラゴン] ★★★ ヒナタリュウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121399_i.png'
	,'[ドラゴン] ★★★ ヒカゲリュウ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121402_i.png'
	,'[ドラゴン] ★★★ バーンドラコ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121391_i.png'
	,'[ドラゴン] ★★★ アイスドラコ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121394_i.png'
	,'[ドラゴン] ★★★ ウインドラコ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121397_i.png'
	,'[ドラゴン] ★★★ ムーンドラコ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121400_i.png'
	,'[ドラゴン] ★★★ ダークドラコ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121403_i.png'
	,'[ドラゴン] ★★★ キャンドルインプ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121392_i.png'
	,'[ドラゴン] ★★★ ウェルインプ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121395_i.png'
	,'[ドラゴン] ★★★ エアリアルインプ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121398_i.png'
	,'[ドラゴン] ★★★ スターインプ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121401_i.png'
	,'[ドラゴン] ★★★ グレイヴインプ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121404_i.png'
	,'[ドラゴン] ★★★★★ ガルーダ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/130493_i.png'
	
	,'[竜輝の護符] ★★★★★ ブレイジング・クラウン https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121409_i.png'
	,'[竜輝の護符] ★★★★★ ゴージャス・パーティ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121412_i.png'
	,'[竜輝の護符] ★★★★★ ケガは私が治します https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121417_i.png'
	,'[竜輝の護符] ★★★★★ 好敵手 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121413_i.png'
	,'[竜輝の護符] ★★★★★ リュカのイタズラ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121416_i.png'
	,'[竜輝の護符] ★★★★★ ハンティングナイト https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121419_i.png'
	,'[竜輝の護符] ★★★★★ 聖なる祈り https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121414_i.png'
	,'[竜輝の護符] ★★★★★ スイーツパイレーツ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123806_i.png'
	,'[竜輝の護符] ★★★★★ 鬼教官のエール https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122632_i.png'
	,'[竜輝の護符] ★★★★★ 天才の閃き https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121410_i.png'
	,'[竜輝の護符] ★★★★★ クリスタリアの少女 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122631_i.png'
	,'[竜輝の護符] ★★★★★ レヴィオンの英雄 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121418_i.png'
	,'[竜輝の護符] ★★★★★ ハロウィン・ウィッチ・クラフト https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123804_i.png'
	,'[竜輝の護符] ★★★★★ ドラゴンの血族 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121415_i.png'
	,'[竜輝の護符] ★★★★★ トリック・トリート・トリック https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123805_i.png'
	,'[竜輝の護符] ★★★★★ テンペストグローリー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/124316_i.png'
	,'[竜輝の護符] ★★★★★ 宝石と剣 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/127017_i.png'
	,'[竜輝の護符] ★★★★★ クラウの策略 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/127018_i.png'
	,'[竜輝の護符] ★★★★ 百刃繚乱 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121420_i.png'
	,'[竜輝の護符] ★★★★ 戦場のふたり https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121440_i.png'
	,'[竜輝の護符] ★★★★ デンジャラスビューティ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122958_i.png'
	,'[竜輝の護符] ★★★★ セクシー・スナイパー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121422_i.png'
	,'[竜輝の護符] ★★★★ 在りし日の幸せ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121441_i.png'
	,'[竜輝の護符] ★★★★ 研究成果の新魔術 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121436_i.png'
	,'[竜輝の護符] ★★★★ 運命の救済 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121421_i.png'
	,'[竜輝の護符] ★★★★ この身は影となりて https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121433_i.png'
	,'[竜輝の護符] ★★★★ 楽しき命懸けの戦 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121434_i.png'
	,'[竜輝の護符] ★★★★ 王の威厳 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121429_i.png'
	,'[竜輝の護符] ★★★★ 手がかかるんだから！ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121431_i.png'
	,'[竜輝の護符] ★★★★ ここは退却しましょう！ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121432_i.png'
	,'[竜輝の護符] ★★★★ 鍛冶屋三姉妹の絆 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121437_i.png'
	,'[竜輝の護符] ★★★★ ダンス・ダンス・バトル！ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121438_i.png'
	,'[竜輝の護符] ★★★★ アツアツ女子会 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121424_i.png'
	,'[竜輝の護符] ★★★★ 雨空の思い出 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121423_i.png'
	,'[竜輝の護符] ★★★★ 我らが知恵袋 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121425_i.png'
	,'[竜輝の護符] ★★★★ サバイバルデイズ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121426_i.png'
	,'[竜輝の護符] ★★★★ 未知への一歩 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121430_i.png'
	,'[竜輝の護符] ★★★★ シルキーのお手伝い https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123803_i.png'
	,'[竜輝の護符] ★★★★ 天空の覇者 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121427_i.png'
	,'[竜輝の護符] ★★★★ 甲冑師の大望 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121435_i.png'
	,'[竜輝の護符] ★★★★ 聖騎士の守り https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122721_i.png'
	,'[竜輝の護符] ★★★★ 五竜の咆哮：ミドガルズオルム https://gamewith.akamaized.net/article_tools/dragalialost/gacha/124311_i.png'
	,'[竜輝の護符] ★★★★ 五竜の咆哮：マーキュリー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/124312_i.png'
	,'[竜輝の護符] ★★★★ 五竜の咆哮：ブリュンヒルデ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/124313_i.png'
	,'[竜輝の護符] ★★★★ 五竜の咆哮：ユピテル https://gamewith.akamaized.net/article_tools/dragalialost/gacha/124314_i.png'
	,'[竜輝の護符] ★★★★ 五竜の咆哮：ゾディアーク https://gamewith.akamaized.net/article_tools/dragalialost/gacha/124315_i.png'
	,'[竜輝の護符] ★★★★ サムライたちの休息 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/127015_i.png'
	,'[竜輝の護符] ★★★★ 鮮烈なコンビネーション https://gamewith.akamaized.net/article_tools/dragalialost/gacha/127056_i.png'
	,'[竜輝の護符] ★★★ 「グリモルス・デクス」写本 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121463_i.png'
	,'[竜輝の護符] ★★★ アルベリア国旗 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121447_i.png'
	,'[竜輝の護符] ★★★ 破天の角笛 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121448_i.png'
	,'[竜輝の護符] ★★★ つわものたちの夢の跡 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121462_i.png'
	,'[竜輝の護符] ★★★ 聖光輪 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121443_i.png'
	,'[竜輝の護符] ★★★ セントロータスの風 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121458_i.png'
	,'[竜輝の護符] ★★★ ドラゴンの寝床 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121454_i.png'
	,'[竜輝の護符] ★★★ 名馬スカービット https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121442_i.png'
	,'[竜輝の護符] ★★★ ティータイム https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121444_i.png'
	,'[竜輝の護符] ★★★ バラドンナの花 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121445_i.png'
	,'[竜輝の護符] ★★★ 頂に吼える牙 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121450_i.png'
	,'[竜輝の護符] ★★★ 八つ葉のクローバー https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121460_i.png'
	,'[竜輝の護符] ★★★ 《結社》の仮面 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121451_i.png'
	,'[竜輝の護符] ★★★ 遙かなる霊峰 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121452_i.png'
	,'[竜輝の護符] ★★★ 森と湖の歌声 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121453_i.png'
	,'[竜輝の護符] ★★★ 秘伝の書 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121455_i.png'
	,'[竜輝の護符] ★★★ 鉄騎兵の盾 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121457_i.png'
	,'[竜輝の護符] ★★★ アロマポット https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121459_i.png'
	,'[竜輝の護符] ★★★ 禁じられた遺物 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121461_i.png'
	,'[竜輝の護符] ★★★ 闇夜の通告 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121464_i.png'
	,'[竜輝の護符] ★★★ 明日への轍 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121466_i.png'
	,'[竜輝の護符] ★★★ 聖草ポーションハーブ https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121467_i.png'
	,'[竜輝の護符] ★★★ 溶けない氷 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121468_i.png'
	,'[竜輝の護符] ★★★ パンプキンボックス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/123802_i.png'
	,'[竜輝の護符] ★★★ 過ぎ去りし日の王冠 https://gamewith.akamaized.net/article_tools/dragalialost/gacha/122959_i.png'
	,'[竜輝の護符] ★★★ お出かけの日のとっておき https://gamewith.akamaized.net/article_tools/dragalialost/gacha/127014_i.png'
	
	// ここから下はネタ枠
	,'[キャラクター] ☆☆☆☆ 寝るシェラ https://i.ytimg.com/vi/dTOM1_eKaLk/hqdefault.jpg'
	,'[キャラクター] ☆☆☆☆ 寝るフィリス [[画像提供求む！]]'
	,'[キャラクター] ☆☆☆☆ ゼシア https://cdn.gamerch.com/contents/wiki/70/entry/4CaoGgos.png'
	,'[キャラクター] ☆☆☆☆ シーリス https://cdn.gamerch.com/contents/wiki/70/entry/TedcsiV5.jpg'
	,'[キャラクター] ☆☆☆☆ アローラス https://gamewith.akamaized.net/article_tools/dragalialost/gacha/121429_i.png'
	,'[キャラクター] ☆ エミュール https://cdn.gamerch.com/contents/wiki/70/entry/pwAHaNj9.jpg'
	,'[キャラクター] ☆☆☆ ヴァルクス https://cdn.gamerch.com/contents/wiki/70/entry/uFnIAavN.jpg'
	,'[キャラクター] ☆☆☆ ファルエス https://cdn.gamerch.com/contents/wiki/70/entry/dl6kmFHb.jpg'
	,'[キャラクター] ☆☆☆ シェス https://cdn.gamerch.com/contents/wiki/70/entry/SGk7sEIM.jpg'
	,'[キャラクター] ☆☆☆ レオニード https://cdn.gamerch.com/contents/wiki/70/entry/jcz7rSkb.jpg'
	,'[キャラクター] ☆☆☆ ハール https://cdn.gamerch.com/contents/wiki/70/entry/WXiaQKPK.jpg'
	,'[キャラクター] ☆☆☆ リーフ https://cdn.gamerch.com/contents/wiki/70/entry/YPzshu0a.jpg'
	,'[キャラクター] ☆☆☆☆☆ この世ならざるもの https://stamp.bokete.jp/62357695.png'
	
	,'[ドラゴン] ☆☆☆ ナーム http://livedoor.blogimg.jp/dragalialostn10cg/imgs/7/b/7b749225-s.png'
	,'[ドラゴン] ☆☆☆☆☆ バハムート http://tn.smilevideo.jp/smile?i=25973277.L'
	,'[ドラゴン] ☆☆☆ アーケオル王 https://img.altema.jp/dragalialost/uploads/2018/10/2018y10m04d_1600428803.jpg'
	,'[ドラゴン] ☆☆☆☆ フレガノス https://gamewith.akamaized.net/img/e650439ceae88d280eba6eb38f7529fa.jpg'
	,'[ドラゴン] ☆☆☆ カボチャクロプス https://gamewith.akamaized.net/img/eeeab4dc40fd5b6dbd4cb28d7e892f8e.jpg'
	,'[ドラゴン] ☆☆☆ ストームストーン https://img.altema.jp/dragalialost/uploads/2018/11/2018y11m01d_1417231075.jpg'
	,'[ドラゴン] ☆☆☆☆ ヒュプノス https://gamewith.akamaized.net/img/1efdcc85930eebbc4371fecbbce0e1b0.jpg'
	];

	//#endregion
*/

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	if (message.author.equals(client.user)) return;
	let msg = message.content;

	/*
	if (msg === '!help') {
		// help表示
		let meshelp = 
			'\n・*!ガチャ* : キャラとドラゴンのガチャだよ。（護符は準備中）' + 
			''
		;
		message.reply(meshelp);
	}
	*/

	if (msg === '!ping') { message.reply('!pong'); }

	if (msg.indexOf('!NG') !== -1) {message.channel.send('https://imgur.com/KGQZCo7'); }
	if (msg.indexOf('!あのなあ') !== -1) {message.channel.send('https://imgur.com/a/0O9Z5QW'); }
	if (msg.indexOf('!あぶない') !== -1) {message.channel.send('https://imgur.com/F09HXqv'); }
	if (msg.indexOf('!ありがとう') !== -1) {message.channel.send('https://imgur.com/3PV4tYH'); }
	if (msg.indexOf('!いくよ') !== -1) {message.channel.send('https://imgur.com/mKSxhgW'); }
	if (msg.indexOf('!いまいく') !== -1) {message.channel.send('https://imgur.com/zaxGdPu'); }
	if (msg.indexOf('!うっ') !== -1) {message.channel.send('https://imgur.com/8P9I8n6'); }
	if (msg.indexOf('!おつかれ') !== -1) {message.channel.send('https://imgur.com/mbDoKub'); }
	if (msg.indexOf('!おっけー') !== -1) {message.channel.send('https://imgur.com/pOmQupW'); }
	if (msg.indexOf('!かいふく') !== -1) {message.channel.send('https://imgur.com/iLCqWEY'); }
	if (msg.indexOf('!ぐぬぬ') !== -1) {message.channel.send('https://imgur.com/Phkr7V0'); }
	if (msg.indexOf('!ごめんね') !== -1) {message.channel.send('https://imgur.com/pBZYfQv'); }
	if (msg.indexOf('!ぜったい勝つ') !== -1) {message.channel.send('https://imgur.com/w4RLVff'); }
	if (msg.indexOf('!たすけて') !== -1) {message.channel.send('https://imgur.com/WS7VmL0'); }
	if (msg.indexOf('!チャンス') !== -1) {message.channel.send('https://imgur.com/V3nAnLs'); }
	if (msg.indexOf('!どんまい') !== -1) {message.channel.send('https://imgur.com/7G7s9Sp'); }
	if (msg.indexOf('!ナイス') !== -1) {message.channel.send('https://imgur.com/JRNyoai'); }
	if (msg.indexOf('!にやり') !== -1) {message.channel.send('https://imgur.com/DTlXJNj'); }
	if (msg.indexOf('!ひえー') !== -1) {message.channel.send('https://imgur.com/z37DLQR'); }
	if (msg.indexOf('!ヒャッホー') !== -1) {message.channel.send('https://imgur.com/jhyjRiT'); }
	if (msg.indexOf('!ほっ') !== -1) {message.channel.send('https://imgur.com/Y6FC3EO'); }
	if (msg.indexOf('!まかせろ') !== -1) {message.channel.send('https://imgur.com/mUGnRW6'); }
	if (msg.indexOf('!マジで') !== -1) {message.channel.send('https://imgur.com/MDvuQeS'); }
	if (msg.indexOf('!まってー') !== -1) {message.channel.send('https://imgur.com/KHrWQiy'); }
	if (msg.indexOf('!やった') !== -1) {message.channel.send('https://imgur.com/wfGFPRk'); }
	if (msg.indexOf('!よろしく') !== -1) {message.channel.send('https://imgur.com/Hf4TCHv'); }
	if (msg.indexOf('!回復求む') !== -1) {message.channel.send('https://imgur.com/872ybnZ'); }
	if (msg.indexOf('!攻撃おねがい') !== -1) {message.channel.send('https://imgur.com/P5xo4p1'); }
	if (msg.indexOf('!攻撃担当') !== -1) {message.channel.send('https://imgur.com/dxZbjB5'); }
	if (msg.indexOf('!防御は俺') !== -1) {message.channel.send('https://imgur.com/1ClglGf'); }
	if (msg.indexOf('!防御は任せた') !== -1) {message.channel.send('https://imgur.com/bkDlgIj'); }

	if (msg === '!スタンプ') {
		message.reply('!NG, !あのなあ, !あぶない, !ありがとう, !いくよ, !いまいく, !うっ, !おつかれ, !おっけー, !かいふく, !ぐぬぬ, !ごめんね, !ぜったい勝つ, !たすけて, !チャンス, !どんまい, !ナイス, !にやり, !ひえー, !ヒャッホー, !ほっ, !まかせろ, !マジで, !まってー, !やった, !よろしく, !回復求む, !攻撃おねがい, !攻撃担当, !防御は俺, !防御は任せた');
	}

	if (msg.indexOf('!ガチャ') !== -1) {
		let gacha;
		var num = Math.floor(Math.random() * 100);
		if ( num < 10 ) {
			gacha = a_Gacha_Rare5[Math.floor(Math.random() * a_Gacha_Rare5.length)];
		} else if ( num < 40 ) {
			gacha = a_Gacha_Rare4[Math.floor(Math.random() * a_Gacha_Rare4.length)];
		} else {
			gacha = a_Gacha_Rare3[Math.floor(Math.random() * a_Gacha_Rare3.length)];
		}
		/*
		let gacha = a_Gacha[Math.floor(Math.random() * a_Gacha.length)];
		*/
		message.reply(gacha+' が出たよ !!');
	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

exports.seed = function (knex) {
  // ダミーデータの生成
  let seedData = [];
  let id = 1;
  const foodItems = [
    "リンゴ",
    "バナナ",
    "オレンジ",
    "ブドウ",
    "桃",
    "メロン",
    "キウイ",
    "マンゴー",
    "パイナップル",
    "イチゴ",
    "トマト",
    "キャベツ",
    "レタス",
    "ほうれん草",
    "ナス",
    "ピーマン",
    "ジャガイモ",
    "さつまいも",
    "かぼちゃ",
    "アボカド",
    "牛肉",
    "豚肉",
    "鶏肉",
    "ラム肉",
    "ベーコン",
    "ハム",
    "サーモン",
    "マグロ",
    "いわし",
    "えび",
    "卵",
    "牛乳",
    "ヨーグルト",
    "チーズ",
    "バター",
    "豆腐",
    "納豆",
    "味噌",
    "しょうゆ",
    "醤油",
    "パスタ",
    "米",
    "パン",
    "うどん",
    "そば",
    "ラーメン",
    "クスクス",
    "キノア",
    "オートミール",
    "コーンフレーク",
    "アーモンド",
    "カシューナッツ",
    "くるみ",
    "ピーナッツ",
    "ひまわりの種",
    "オリーブオイル",
    "ココナッツオイル",
    "ごま油",
    "菜種油",
    "ひまわり油",
    "ニンニク",
    "しょうが",
    "ネギ",
    "玉ねぎ",
    "にんじん",
    "大根",
    "セロリ",
    "きゅうり",
    "茄子",
    "ゴーヤ",
    "チョコレート",
    "クッキー",
    "ケーキ",
    "ドーナツ",
    "パイ",
    "アイスクリーム",
    "プリン",
    "ゼリー",
    "ヨーグルト",
    "キャンディ",
    "コーヒー豆",
    "紅茶葉",
    "緑茶",
    "ウーロン茶",
    "ハーブティー",
    "ココア",
    "砂糖",
    "はちみつ",
    "メープルシロップ",
    "ジャム",
    "しいたけ",
    "まいたけ",
    "エノキ",
    "舞茸",
    "トリュフ",
    "ポルチーニ",
    "キクラゲ",
    "ひらたけ",
    "エリンギ",
    "なめこ",
  ];
  const productShapes = ["1本", "1/2本", "1/2玉", "1玉", "1束", "2束"];

  foodItems.forEach((item) => {
    productShapes.forEach((shape) => {
      seedData.push({
        id: id++,
        storeId: Math.floor(Math.random() * 25) + 1, // 1から25までのランダムな店舗ID
        productName: item,
        productShape: shape,
        piece: Math.floor(Math.random() * 100) + 1, // 在庫数は1から100のランダムな数値
        price: Math.floor(Math.random() * 5000) + 500, // 価格は500から5000のランダムな数値
      });
    });
  });

  // テーブル内の既存データを削除
  return knex("storage")
    .del()
    .then(function () {
      // 新しいシードデータを挿入
      return knex("storage").insert(seedData);
    });
};

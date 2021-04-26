export type Support = {
  id: string;
  name: string;
  rarity?: "ssr" | "sr" | "r";
  type?: string;
};

export const supports: Support[] = [
  {
    id: "special_week",
    name: "スペシャルウィーク",
    rarity: "ssr",
    type: "konjo",
  },
  {
    id: "special_week_event",
    name: "スペシャルウィーク",
    rarity: "ssr",
    type: "speed",
  },
  {
    id: "special_week_r",
    name: "スペシャルウィーク",
    rarity: "r",
    type: "konjo",
  },
  {
    id: "sirence_suzuka",
    name: "サイレンススズカ",
    rarity: "ssr",
    type: "speed",
  },
  {
    id: "sirence_suzuka_r",
    name: "サイレンススズカ",
    rarity: "r",
    type: "speed",
  },
  {
    id: "toukai_teioh",
    name: "トウカイテイオー",
    rarity: "ssr",
    type: "speed",
  },
  {
    id: "toukai_teioh_r",
    name: "トウカイテイオー",
    rarity: "r",
    type: "speed",
  },
  { id: "marzensky_r", name: "マルゼンスキー", rarity: "r", type: "speed" },
  { id: "fujikiseki", name: "フジキセキ", rarity: "sr", type: "smart" },
  { id: "fujikiseki_r", name: "フジキセキ", rarity: "r", type: "smart" },
  { id: "oguricap", name: "オグリキャップ", rarity: "ssr", type: "power" },
  { id: "oguricap_r", name: "オグリキャップ", rarity: "r", type: "power" },
  { id: "gold_ship", name: "ゴールドシップ", rarity: "ssr", type: "stamina" },
  { id: "gold_ship_r", name: "ゴールドシップ", rarity: "r", type: "stamina" },
  { id: "vodka", name: "ウォッカ", rarity: "ssr", type: "power" },
  { id: "vodka_r", name: "ウォッカ", rarity: "r", type: "power" },
  {
    id: "daiwa_scarlet",
    name: "ダイワスカーレット",
    rarity: "sr",
    type: "smart",
  },
  {
    id: "daiwa_scarlet_r",
    name: "ダイワスカーレット",
    rarity: "r",
    type: "smart",
  },
  { id: "taiki_shutle_r", name: "タイキシャトル", rarity: "r", type: "speed" },
  { id: "grass_wonder", name: "グラスワンダー", rarity: "ssr", type: "konjo" },
  { id: "grass_wonder_r", name: "グラスワンダー", rarity: "r", type: "konjo" },
  { id: "hishiamazon", name: "ヒシアマゾン", rarity: "sr", type: "power" },
  { id: "hishiamazon_r", name: "ヒシアマゾン", rarity: "r", type: "power" },
  {
    id: "mesiro_maceen",
    name: "メジロマックイーン",
    rarity: "ssr",
    type: "stamina",
  },
  {
    id: "mesiro_maceen_r",
    name: "メジロマックイーン",
    rarity: "r",
    type: "stamina",
  },
  {
    id: "erkondle_paser",
    name: "エルコンドルパサー",
    rarity: "ssr",
    type: "power",
  },
  {
    id: "erkondle_paser_r",
    name: "エルコンドルパサー",
    rarity: "r",
    type: "power",
  },
  {
    id: "teiem_operaoh_r",
    name: "テイエムオペラオー",
    rarity: "r",
    type: "stamina",
  },
  {
    id: "shinbori_rudolf_r",
    name: "シンボリルドルフ",
    rarity: "r",
    type: "smart",
  },
  { id: "air_grouve", name: "エアグルーブ", rarity: "sr", type: "konjo" },
  { id: "air_grouve_r", name: "エアグルーブ", rarity: "r", type: "konjo" },
  {
    id: "agnes_degital",
    name: "アグネスデジタル",
    rarity: "sr",
    type: "power",
  },
  {
    id: "agnes_degital_r",
    name: "アグネスデジタル",
    rarity: "r",
    type: "power",
  },
  { id: "tamamo_cross", name: "タマモクロス", rarity: "ssr", type: "stamina" },
  { id: "tamamo_cross_r", name: "タマモクロス", rarity: "r", type: "stamina" },
  { id: "seiun_sky", name: "セイウンスカイ", rarity: "ssr", type: "stamina" },
  { id: "seiun_sky_r", name: "セイウンスカイ", rarity: "r", type: "stamina" },
  {
    id: "fine_motion",
    name: "ファインモーション",
    rarity: "ssr",
    type: "smart",
  },
  {
    id: "fine_motion_r",
    name: "ファインモーション",
    rarity: "r",
    type: "smart",
  },
  { id: "biwahayahide", name: "ビワハヤヒデ", rarity: "sr", type: "power" },
  { id: "biwahayahide_r", name: "ビワハヤヒデ", rarity: "r", type: "power" },
  {
    id: "mayano_topgun",
    name: "マヤノトップガン",
    rarity: "sr",
    type: "stamina",
  },
  {
    id: "mayano_topgun_r",
    name: "マヤノトップガン",
    rarity: "r",
    type: "stamina",
  },
  {
    id: "manhattan_cafe",
    name: "マンハッタンカフェ",
    rarity: "sr",
    type: "stamina",
  },
  {
    id: "manhattan_cafe_r",
    name: "マンハッタンカフェ",
    rarity: "r",
    type: "stamina",
  },
  { id: "mihono_brubon", name: "ミホノブルボン", rarity: "sr", type: "power" },
  { id: "mihono_brubon_r", name: "ミホノブルボン", rarity: "r", type: "power" },
  { id: "mesiro_rian", name: "メジロライアン", rarity: "sr", type: "power" },
  { id: "mesiro_rian_r", name: "メジロライアン", rarity: "r", type: "power" },
  { id: "yukino_bijin", name: "ユキノビジン", rarity: "ssr", type: "smart" },
  {
    id: "yukino_bijin_power",
    name: "ユキノビジン",
    rarity: "sr",
    type: "konjo",
  },
  { id: "yukino_bijin_r", name: "ユキノビジン", rarity: "r", type: "konjo" },
  { id: "rice_shower", name: "ライスシャワー", rarity: "ssr", type: "stamina" },
  { id: "rice_shower_r", name: "ライスシャワー", rarity: "r", type: "stamina" },
  { id: "aines_fujin", name: "アイネスフウジン", rarity: "ssr", type: "konjo" },
  { id: "aines_fujin_r", name: "アイネスフウジン", rarity: "r", type: "konjo" },
  {
    id: "agunes_takion",
    name: "アグネスタキオン",
    rarity: "sr",
    type: "smart",
  },
  {
    id: "agunes_takion_r",
    name: "アグネスタキオン",
    rarity: "r",
    type: "smart",
  },
  {
    id: "wining_tchiket",
    name: "ウイニングチケット",
    rarity: "ssr",
    type: "konjo",
  },
  {
    id: "wining_tchiket_r",
    name: "ウイニングチケット",
    rarity: "r",
    type: "konjo",
  },
  { id: "air_shakirl", name: "エアシャカール", rarity: "ssr", type: "smart" },
  { id: "air_shakirl_r", name: "エアシャカール", rarity: "r", type: "smart" },
  {
    id: "eishin_flash",
    name: "エイシンフラッシュ",
    rarity: "sr",
    type: "speed",
  },
  {
    id: "eishin_flash_r",
    name: "エイシンフラッシュ",
    rarity: "r",
    type: "speed",
  },
  { id: "gold_citi", name: "ゴールドシチー", rarity: "ssr", type: "speed" },
  { id: "gold_citi_r", name: "ゴールドシチー", rarity: "r", type: "speed" },
  {
    id: "sakura_bakushinoh",
    name: "サクラバクシンオー",
    rarity: "ssr",
    type: "speed",
  },
  {
    id: "sakura_bakushinoh_r",
    name: "サクラバクシンオー",
    rarity: "r",
    type: "speed",
  },
  {
    id: "suipu_tohsho",
    name: "スイープトウショウ",
    rarity: "sr",
    type: "speed",
  },
  {
    id: "suipu_tohsho_r",
    name: "スイープトウショウ",
    rarity: "r",
    type: "speed",
  },
  {
    id: "super_clirck",
    name: "スーパークリーク",
    rarity: "ssr",
    type: "stamina",
  },
  {
    id: "super_clirck_r",
    name: "スーパークリーク",
    rarity: "r",
    type: "stamina",
  },
  {
    id: "smart_falcon",
    name: "スマートファルコン",
    rarity: "ssr",
    type: "power",
  },
  {
    id: "smart_falcon_r",
    name: "スマートファルコン",
    rarity: "r",
    type: "power",
  },
  { id: "narita_taisin", name: " ナリタタイシン", rarity: "sr", type: "speed" },
  {
    id: "narita_taisin_r",
    name: " ナリタタイシン",
    rarity: "r",
    type: "speed",
  },
  {
    id: "nishino_flower",
    name: "ニシノフラワー",
    rarity: "ssr",
    type: "speed",
  },
  {
    id: "nishino_flower_sr",
    name: "ニシノフラワー",
    rarity: "sr",
    type: "power",
  },
  {
    id: "nishino_flower_r",
    name: "ニシノフラワー",
    rarity: "r",
    type: "speed",
  },
  { id: "haru_urara", name: "ハルウララ", rarity: "ssr", type: "konjo" },
  { id: "haru_urara_r", name: "ハルウララ", rarity: "r", type: "konjo" },
  { id: "biko_pegasas", name: "ビコーペガサス", rarity: "ssr", type: "speed" },
  { id: "biko_pegasas_r", name: "ビコーペガサス", rarity: "r", type: "speed" },
  {
    id: "maveras_sunday",
    name: "マーベラスサンデー",
    rarity: "sr",
    type: "smart",
  },
  {
    id: "maveras_sunday_r",
    name: "マーベラスサンデー",
    rarity: "r",
    type: "smart",
  },
  {
    id: "matikane_fukukitaru",
    name: "マチカネフクキタル",
    rarity: "sr",
    type: "smart",
  },
  {
    id: "matikane_fukukitaru_r",
    name: "マチカネフクキタル",
    rarity: "r",
    type: "smart",
  },
  { id: "meisho_dotoh", name: "メイショウドトウ", rarity: "sr", type: "konjo" },
  {
    id: "meisho_dotoh_r",
    name: "メイショウドトウ",
    rarity: "r",
    type: "konjo",
  },
  { id: "mesiro_dorbel", name: "メジロドーベル", rarity: "sr", type: "smart" },
  { id: "mesiro_dorbel_r", name: "メジロドーベル", rarity: "r", type: "smart" },
  { id: "nice_neitya", name: "ナイスネイチャ", rarity: "sr", type: "smart" },
  {
    id: "nice_neitya_konjo",
    name: "ナイスネイチャ",
    rarity: "sr",
    type: "konjo",
  },
  { id: "nice_neitya_r", name: "ナイスネイチャ", rarity: "r", type: "konjo" },
  { id: "king_heiro", name: "キングヘイロー", rarity: "sr", type: "speed" },
  { id: "king_heiro_r", name: "キングヘイロー", rarity: "r", type: "speed" },
  {
    id: "matikane_tanhoiza",
    name: "マチカネタンホイザ",
    rarity: "ssr",
    type: "konjo",
  },
  {
    id: "matikane_tanhoiza_r",
    name: "マチカネタンホイザ",
    rarity: "r",
    type: "konjo",
  },
  {
    id: "ikuno_diktace",
    name: "イクノディクタス",
    rarity: "sr",
    type: "smart",
  },
  {
    id: "ikuno_diktace_r",
    name: "イクノディクタス",
    rarity: "r",
    type: "smart",
  },
  { id: "mesiro_parmer", name: "メジロパーマー", rarity: "ssr", type: "konjo" },
  { id: "mesiro_parmer_r", name: "メジロパーマー", rarity: "r", type: "konjo" },
  {
    id: "daitaku_herios",
    name: "ダイタクヘリオス",
    rarity: "sr",
    type: "power",
  },
  {
    id: "daitaku_herios_r",
    name: "ダイタクヘリオス",
    rarity: "r",
    type: "power",
  },
  {
    id: "twin_turbo_shisho",
    name: "ツインターボ",
    rarity: "ssr",
    type: "speed",
  },
  {
    id: "twin_turbo_shisho_r",
    name: "ツインターボ",
    rarity: "r",
    type: "speed",
  },
  {
    id: "satono_diamond",
    name: "サトノダイヤモンド",
    rarity: "ssr",
    type: "stamina",
  },
  {
    id: "satono_diamond_r",
    name: "サトノダイヤモンド",
    rarity: "r",
    type: "stamina",
  },
  {
    id: "kitasan_black",
    name: "キタサンブラック",
    rarity: "ssr",
    type: "speed",
  },
  {
    id: "kitasan_black_r",
    name: "キタサンブラック",
    rarity: "r",
    type: "speed",
  },
  { id: "hayakawa_taduna", name: "駿川たづな", rarity: "ssr", type: "friend" },
  { id: "hayakawa_taduna_r", name: "駿川たづな", rarity: "r", type: "friend" },
  { id: "kiryuin_aoi", name: "桐生院葵", rarity: "sr", type: "friend" },
  { id: "kiryuin_aoi_r", name: "桐生院葵", rarity: "r", type: "friend" },
];

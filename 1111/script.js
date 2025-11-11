// ①オブジェクトで色を用意
const settingColors = [
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 },
    { r: 255, g: 255, b: 0 },
]
// ②オブジェクトの色をbodyの背景色にする
const body = document.body;
// ③4色制作して、配列にする
document.body.style.backgroundColor =
    'rgb(' +
    settingColors[0].r +
    ',' +
    settingColors[0].g +
    ',' +
    settingColors[0].b +
    ')';


// ④スクロールするたびにイベント
// ⑧スクロール量を計算

// 画面に見えている高さ（ブラウザの表示部分）
const viewHeight = document.documentElement.clientHeight;

// スクロールできる合計の長さを計算
const scrollable = fullHeight - viewHeight;// ⑦スクロールを4分割

window.addEventListener('scroll', function () {
    console.log('スクロールされました');
    // ⑤documentの縦の長さ取得

    const fullHeight = document.documentElement.scrollHeight;
    console.log(fullHeight);

    const scrollY = window.scrollY;
    console.log(scrollY);

    if (scrollY < scrollable / 4) {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[0].r +
            ',' +
            settingColors[0].g +
            ',' +
            settingColors[0].b +
            ')';
    } else if (scrollY < scrollable / 2) {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[1].r +
            ',' +
            settingColors[1].g +
            ',' +
            settingColors[1].b +
            ')';
    } else if (scrollY < (scrollable * 3) / 4) {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[2].r +
            ',' +
            settingColors[2].g +
            ',' +
            settingColors[2].b +
            ')';
    } else {
        document.body.style.backgroundColor =
            'rgb(' +
            settingColors[3].r +
            ',' +
            settingColors[3].g +
            ',' +
            settingColors[3].b +
            ')';
    }
});

// ⑥1 / 4進んだら色が変わるようにする
// ⑨変数scrollableを4分割
// ⑩関数の定義
// ⑪関数の呼び出し（実行）の実引数
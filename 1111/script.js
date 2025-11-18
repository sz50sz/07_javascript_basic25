// ①オブジェクトで色を用意
const settingColors = [
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 },
    { r: 255, g: 255, b: 0 },
];

// ② 関数の定義
function changeColor(num) {
    document.body.style.backgroundColor =
        `rgb(${settingColors[num].r}, ${settingColors[num].g}, ${settingColors[num].b})`;
}

// ④スクロールするたびにイベント
window.addEventListener('scroll', function () {
    // ⑤documentの縦の長さ取得
    const fullHeight = document.documentElement.scrollHeight;

    // 画面に見えている高さ（ブラウザの表示部分）
    const viewHeight = document.documentElement.clientHeight;

    // スクロールできる合計の長さ
    const scrollable = fullHeight - viewHeight;

    const scrollY = window.scrollY;

    if (scrollY < scrollable / 4) {
        changeColor(0);
    } else if (scrollY < scrollable / 2) {
        changeColor(1);
    } else if (scrollY < (scrollable * 3) / 4) {
        changeColor(2);
    } else {
        changeColor(3);
    }
});

document.querySelector('.moveToTop').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
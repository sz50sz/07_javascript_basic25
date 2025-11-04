// 初期設定
const MAX_HP = 100;
const DAMAGE_MIN = 8;
const DAMAGE_MAX = 20;

function shakeEnemy() {
  const enemyArea = document.querySelector('.enemy');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth;
  enemyArea.classList.add('hit');
}

function shakeEnemy2() {
  const enemyArea = document.querySelector('.enemy2');
  enemyArea.classList.remove('hit');
  enemyArea.offsetWidth;
  enemyArea.classList.add('hit');
}

// 状態（HP）
let hp = MAX_HP; //100
let hp2 = MAX_HP; //100

// モンスター
const enemy = document.querySelector('.enemyImg');

// HP表示部分
const hpText = document.querySelector('.hpText span');
const hpBar = document.querySelector('.hpBar');

// 攻撃処理
const attackButton = document.querySelector('.attackBtn');

// 効果音を取得
const seHit = document.querySelector('#se-hit');
const seDefeat = document.querySelector('#se-defeat');

attackButton.addEventListener('click', function () {
  const damage =
    Math.floor(Math.random() * (DAMAGE_MAX - DAMAGE_MIN + 1)) + DAMAGE_MIN;
  hp = hp - damage;

  if (hp <= 0) {
    hpText.textContent = 0;
    hpBar.value = 0;
    enemy.classList.add('enemy--fly');
    seDefeat.play();
    attackButton.disabled = true;
    document.querySelector('.log').textContent = 'モンスターを倒した！';
  } else {
    hpText.textContent = hp;
    hpBar.value = hp;
    shakeEnemy();
    seHit.currentTime = 0;
    seHit.play();
  }
});

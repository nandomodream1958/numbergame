const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const restartButton = document.getElementById('restartButton');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');

let targetNumber;
let attempts;

function newGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = '';
    attemptsDisplay.textContent = attempts;
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    restartButton.style.display = 'none';
}

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = attempts;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = '1から100までの数字を入力してください。';
        return;
    }

    if (userGuess === targetNumber) {
        message.textContent = `正解です！ ${attempts}回で当たりました！`;
        message.style.color = 'green';
        guessInput.disabled = true;
        guessButton.disabled = true;
        restartButton.style.display = 'inline-block';
        const fanfare = new Audio('fanfare.mp3'); // ファンファーレの音声ファイルを指定
        fanfare.play();
    } else if (userGuess < targetNumber) {
        message.textContent = 'もっと大きい数字です。';
        message.style.color = 'red';
    } else {
        message.textContent = 'もっと小さい数字です。';
        message.style.color = 'red';
    }
}

guessButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', newGame);

// Enterキーでも予想できるようにする
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

// ゲームの初期化
newGame();

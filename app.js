const $hour = document.querySelector('#hour');
const $minute = document.querySelector('#minute');
const $second = document.querySelector('#second');
const $inputs = document.querySelectorAll('input');

const $startBtn = document.querySelector('.startBtn');
const $pauseBtn = document.querySelector('.pauseBtn');
const $resetBtn = document.querySelector('.resetBtn');

let timerId;

function fillZero(str) {
    return ('00' + str).slice(-2)
}

function checkNumber(event) {
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}

function startTimer(event) {
    let totalTime = +$hour.value * 3600 + +$minute.value * 60 + +$second.value;

    if (totalTime <= 0) {
        return;
    }

    timerId = setInterval(() => {
        if (totalTime <= 1) {
            clearInterval(timerId);
            setTimeout(() => {
                alert('Timer End');
            }, 0);
        }

        totalTime -= 1;
        $hour.value = fillZero(parseInt(totalTime / 3600));
        $minute.value = fillZero(parseInt((totalTime % 3600) / 60));
        $second.value = fillZero((totalTime % 3600) % 60);
    }, 1000);
}

function pauseTimer(event) {
    clearInterval(timerId);
}

function resetTimer(event) {
    clearInterval(timerId);
    $hour.value = '00';
    $minute.value = '00';
    $second.value = '00';
}

$inputs.forEach((input) => {
    input.addEventListener('input', checkNumber);
})

$startBtn.addEventListener('click', startTimer);
$pauseBtn.addEventListener('click', pauseTimer);
$resetBtn.addEventListener('click', resetTimer);

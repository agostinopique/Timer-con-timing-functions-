

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

resetButton.className = 'hide';

const display = document.querySelector('.container span');

let time = 0;

let timer;

startButton.addEventListener('click', startTimer);

stopButton.addEventListener('click', stopTimer);

resetButton.addEventListener('click', resetClick);

pauseButton.addEventListener('click', pauseTimer);


function startTimer(){
    timer = setInterval(timerIncrement, 1000);

}

function stopTimer(){
    clearInterval(timer);
    console.log(`FINE`);
    resetButton.classList.remove('hide');
}

function resetClick(){
    time = 0;
    display.innerHTML = time;
    resetButton.className = 'hide';
}

function timerIncrement(){
    time++;
    display.innerHTML = time;
}


function pauseTimer(){
    clearInterval(timer);
}
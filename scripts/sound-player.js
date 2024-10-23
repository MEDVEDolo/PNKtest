let btnPlay = document.querySelector('.sound__btn-play');
let sound = document.querySelector('.sound__sound');
let currentTime = document.querySelector('.sound__current-time');
let progressBar = document.querySelector('.sound__progress');
let fullTime = document.querySelector('.sound__full-time');
let btnPlayImg = document.querySelector('.sound__btn-play__img');
let progressDone = document.querySelector('.sound__progress_done');
let progressFull = document.querySelector('.sound__progress_full');
let container1 = document.querySelector('.sound');
let container2 = document.querySelector('.actor');

function soundPlay() {
    if (sound.paused) {
        sound.play();
        btnPlayImg.src = 'img/sound-player/pause.png';
    } else {
        sound.pause();
        btnPlayImg.src = 'img/sound-player/play.png';
    }
}

function setFullTime() {
    fullTime.innerHTML = soundTime(sound.duration);
}

function soundChangeTime(e) { 
    let mouseX = Math.floor(e.pageX - (progressFull.offsetLeft + container2.offsetLeft));
    let progress = mouseX / (progressFull.offsetWidth / 100);
    console.log(progressFull.offsetWidth);
    console.log(e.pageX);
    console.log(progressFull.offsetLeft);
    console.log(mouseX);
    console.log(progress);
    progressDone.style.width = `${progress}%`;
    sound.currentTime = sound.duration * (progress / 100);
}

function soundTime(time) { 
    time = Math.floor(time);
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);
    var minutesVal = minutes;
    var secondsVal = seconds;
    if(minutes < 10) {
    minutesVal = '0' + minutes;
    }
    if(seconds < 10) {
    secondsVal = '0' + seconds;
    }
    return minutesVal + ':' + secondsVal;
}

function soundProgress() { 
    progress = (Math.floor(sound.currentTime) / (Math.floor(sound.duration) / 100));
    progressBar.value = progress;
    progressDone.style.width = `${progress}%`;
    currentTime.innerHTML = soundTime(sound.currentTime);
    if (sound.paused) {
        btnPlayImg.src = 'img/sound-player/play.png';
    } else {
        btnPlayImg.src = 'img/sound-player/pause.png';
    }
}

btnPlay.addEventListener("click", soundPlay);
sound.addEventListener('timeupdate',soundProgress);
window.addEventListener('load', setFullTime);
progressFull.addEventListener('click', soundChangeTime);
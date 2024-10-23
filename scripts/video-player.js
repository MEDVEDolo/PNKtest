let btnWatch = document.querySelector('.slider__play');
let videoPlayer = document.querySelector('.video-player');
let btnExit = document.querySelector('.screen-btn');

let btnPlayImg = document.querySelector('.video__btn-play__img');
let audioLanguageInfo = document.querySelector('.video__language-info');

let videoStatus = document.querySelector('.video__big-status');

let infoStatus = 0;

let progressDone = document.querySelector('.video__progress_done');
let progressFull = document.querySelector('.video__progress_full');

let volumeCurrent = document.querySelector('.volume__scale-current');
let volumeFull = document.querySelector('.volume__scale-full');

let btnPlay = document.querySelector('#play');
let video = document.querySelector('#video');
let audio = document.querySelector('#audio');
let progressBar = document.querySelector('#progress');
let time = document.querySelector('#time');
let containerVideo = document.querySelector('.container_video');
let btnSwitch = document.querySelector('.switch-btn');
let audioLanguage = 'or';
let audioLanguageText = document.querySelector('.video__language');
let marginContainer = parseInt(window.getComputedStyle(containerVideo).getPropertyValue("margin-left"));

console.log(window.getComputedStyle(containerVideo).getPropertyValue("margin-left"));

function watch() {
    videoPlayer.style.display = 'block';
}

function exit() {
    videoPlayer.style.display = 'none';
}

function videoTime(time) { 
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

function setAudio() {
    if (audioLanguage == 'rus') {
        audio.src = 'audio/xiao-or.mp3';
        audio.currentTime = video.currentTime + 2;
        audioLanguage = 'or';
        audioLanguageText.innerText = 'Оригинал';
        viewLanguageInfo('оригинал');
    } else {
        audio.src = 'audio/xiao-rus.mp3';
        audio.currentTime = video.currentTime;
        audioLanguage = 'rus';
        audioLanguageText.innerText = 'Озвучка';
        viewLanguageInfo('озвучка');
    }

    if (!video.paused) {
        audio.play();
    }
    btnSwitch.classList.toggle('switch-on');
}

function playAll() {
    if (video.paused) {
        video.play();
        audio.play();
        btnPlayImg.src = 'img/video-player/pause.png';

        videoStatus.style.opacity = '1';
        videoStatus.src = 'img/video-player/pause-big.png';
        setTimeout(function() {
            if (!video.paused) videoStatus.style.opacity = '0';
        }, 1000);
    } else {
        video.pause();
        audio.pause();
        btnPlayImg.src = 'img/video-player/play.png';

        videoStatus.style.opacity = '1';
        videoStatus.src = 'img/video-player/player-big.png';
    }

}

function videoChangeTime(e) { 
    let mouseX = Math.floor(e.pageX - (progressFull.offsetLeft + containerVideo.offsetLeft));
    let progress = mouseX / (progressFull.offsetWidth / 100);
    progressDone.style.width = `${progress}%`;
    video.currentTime = video.duration * (progress / 100);
    if (audio.src.includes('audio/xiao-rus.mp3')) {
        audio.currentTime = (audio.duration * (progress/ 100));
    } else {
        audio.currentTime = (audio.duration * ((progress + 3)/ 100));
    }
    console.log("Time: " + audio.currentTime);
}

function videoProgress() { 
    progress = (Math.floor(video.currentTime) / (Math.floor(video.duration) / 100));
    progressDone.style.width = `${progress}%`;
    time.innerHTML = videoTime(video.currentTime);
}

function videoChangeVolume(e) {
    let mouseX = Math.floor(e.pageX - (volumeFull.offsetLeft + containerVideo.offsetLeft));
    let scale = mouseX / (volumeFull.offsetWidth / 100);
    volumeCurrent.style.width = `${scale}%`;
    let audioVolume = scale / 100;
    if (audioVolume < 0) audioVolume = 0;
    audio.volume = audioVolume;
    console.log(audioVolume);
}

function viewLanguageInfo(language) {
    infoStatus += 1;
    console.log(infoStatus);
    audioLanguageInfo.innerHTML = `Аудио: ${language}`;
    audioLanguageInfo.style.transform = 'translateX(0)';
    if (infoStatus == 1) {
        setTimeout(function() {
            audioLanguageInfo.style.transform = 'translateX(350px)';
            infoStatus = 0;
    }, 2000);
    }
}

window.addEventListener('resize', (e) => {
    marginContainer = parseInt(window.getComputedStyle(containerVideo).getPropertyValue("margin-left"));
  });

btnWatch.addEventListener('click', watch);
video.addEventListener('click', playAll);
progressFull.addEventListener('click', videoChangeTime);
video.addEventListener('timeupdate', videoProgress);
volumeFull.addEventListener('click', videoChangeVolume);
btnExit.addEventListener('click', exit);
/**
 * Created by AntonKC on 30.07.2018.
 */

'use strict';

const playList = [
    {
        path: 'mp3/LA Chill Tour.mp3',
        title: 'LA Chill Tour'
    },
    {
        path: 'mp3/LA Fusion Jam.mp3',
        title: 'LA Fusion Jam'
    },
    {
        path: 'mp3/LA Fusion Jam.mp3',
        title: 'This is it band'
    }
];

const
    mediaPlayer = document.getElementsByClassName('mediaplayer')[0],
    audio = document.getElementsByTagName('audio')[0],
    btnPlay = document.getElementsByClassName('playstate')[0],
    btnNext = document.getElementsByClassName('next')[0],
    btnPrev = document.getElementsByClassName('back')[0],
    btnStop = document.getElementsByClassName('stop')[0],
    title = document.getElementsByClassName('title')[0];

btnPlay.onclick = function() {
    if (!mediaPlayer.classList.contains('play')) {
        mediaPlayer.classList.toggle('play');
        audio.play();
    }else {
        mediaPlayer.classList.contains('play')
        mediaPlayer.classList.toggle('play');
        audio.pause();
    }
};

btnStop.onclick = function() {
    mediaPlayer.classList.remove('play');
    audio.pause();
    audio.currentTime = 0;
};

const playListLength = playList.length - 1;
let currentTrack = 0;

btnNext.onclick = function() {
    btnPlay.click();
    currentTrack === playListLength ? currentTrack = 0 : currentTrack++;
    audio.src = playList[currentTrack].path;
    title.title = playList[currentTrack].title;
    btnPlay.click();
};

btnPrev.onclick = function () {
    btnPlay.click();
    currentTrack === 0 ? currentTrack = playListLength : currentTrack--;
    audio.src = playList[currentTrack].path;
    title.title = playList[currentTrack].title;
    btnPlay.click();
};
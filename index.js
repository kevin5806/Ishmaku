const background = document.getElementById('background');
const text = document.getElementById('ishmaku');
const audio = document.getElementById('audio');
const audioSrc = document.getElementById('audioSrc');

const allertAudio = document.getElementById('allertAudio');

let font, n;

function randomFont() {
    text.classList.remove(font);

    n = Math.floor(Math.random() * 17) + 1;

    font = `font${n}`;

    text.classList.add(font);
}

setInterval(randomFont, 3000);

/* ------ */

function flash() {

    text.classList.add('white');
    background.classList.add('black');

    setTimeout(() => {
        text.classList.remove('white');
        background.classList.remove('black');
    }, 50);

    /* ------ */

    setTimeout(() => {
        text.classList.add('white');
        background.classList.add('black');
    }, 100);

    setTimeout(() => {
        text.classList.remove('white');
        background.classList.remove('black');
    }, 150);

    /* ------ */

    setTimeout(() => {
        text.classList.add('white');
        background.classList.add('black');
    }, 200);

    setTimeout(() => {
        text.classList.remove('white');
        background.classList.remove('black');
    }, 250);

    /* ------ */

    setTimeout(() => {
        text.classList.add('white');
        background.classList.add('black');
    }, 300);

    setTimeout(() => {
        text.classList.remove('white');
        background.classList.remove('black');
    }, 350);

}

setInterval(flash, 12000);

/* ------ */

let nS, song;

nS = Math.floor(Math.random() * 11) + 1;

song = `audios/song${nS}.mp3`;

audio.src = song;
audio.volume = 0.3;

/* controllo stato riproduzione audio */

function audioPause() {
    if (audio.paused) {
        allertAudio.classList.remove('none');
    } else {
        allertAudio.classList.add('none');
    }
}

setInterval(audioPause, 300);
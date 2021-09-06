const audio = document.getElementsByTagName('audio')[0];
const play = document.getElementById('play')
const pause = document.getElementById('pause')

function logMessages(event) {
    console.log(`${event} happened`);
}

audio.onloadstart = () => logMessages('loadstart')
audio.onplay = () => logMessages('play')
audio.onpause = () => logMessages('pause')
audio.onended = () => logMessages('ended')
audio.onprogress = () => logMessages('progress')

play.addEventListener('click', event => {
    audio.play()
})

pause.addEventListener('click', event => {
    audio.pause()
})
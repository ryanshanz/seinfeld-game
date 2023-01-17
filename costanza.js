//little quote generator i made for art vandelay.
//audios obtained using a youtube downloader from Youtube's API which 
//downloads just the audio as mp4. i converted it to mp3 using an online
//app i found, convertio.co

const costanza= document.getElementById("costanza");
const reset = document.getElementById("reset_button");
var george_upset = new Audio('upset3.mp3'); 
var george_answering_machine = new Audio('answering-machine3.mp3'); 
var depressed = new Audio ('depressed.mp3');
var lord_of_idiots = new Audio ('idiots.mp3');
lord_of_idiots.volume = .15;
var society = new Audio ('society.mp3');
var wrong = new Audio ('wrong.mp3');
wrong.volume = 1;
var lie = new Audio ('lie.mp3');
var moops = new Audio('moops.mp3');
var cartwright = new Audio('cartwright.mp3');
var array_of_audios = new Array();
array_of_audios.push(george_upset, george_answering_machine, depressed, lord_of_idiots, society, wrong, lie, moops, cartwright);



// function: when costanza img gets pressed, choose audio from array at random and play.

function clickCostanza(array_of_audios){
    //get random element in array
    var len_array = array_of_audios.length;
    i = Math.round(Math.random() * len_array);
    audio = array_of_audios[i];
    //play audio
    aud = play(audio, array_of_audios);
    return aud;
}

function play(audio){
    audio.play();
    return audio;
}

function stopAudio(audio){
    // reset button protocol: stop current audio, audio back to time = 0.
    audio.pause();
    audio.currentTime = 0;
}

// make costanza clickable
function clicked(array_of_audios){
    // create a variable to keep track of the current audio
    let currently_playing = null

    costanza.onclick = function(){
        if (currently_playing !== null) {
            currently_playing.pause();
            currently_playing.currentTime = 0;
        }
        audio_playing = clickCostanza(array_of_audios);
        audio_playing.onended = function() { clicked(array_of_audios); };
        currently_playing=audio_playing;
    };

    reset.addEventListener('click', () => stopAudio(currently_playing));
}

clicked(array_of_audios);













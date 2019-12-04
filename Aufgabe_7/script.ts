function playSample (sample: string){
    var sound:HTMLAudioElement = new Audio("assets/" + sample);
    sound.play();
}

function arrays (){
    var samplenames:string [] = ["assets/kick.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/snare.mp3", "assets/snare.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/hihat.mp3", "assets/kick.mp3", "assets/laugh2.mp3"];
    var index:number = 0;
    var track = setInterval (playTrack, 300) 

    function playTrack(){
        var playAudio = new Audio(samplenames[index]);
        playAudio.play();
        index ++ 
    }}

window.addEventListener("load", function(){
    document.querySelector("#kick").addEventListener("mousedown", function () {playSample ("kick.mp3")});
    document.querySelector("#snare").addEventListener("mousedown", function () {playSample ("snare.mp3")});
    document.querySelector("#hihat").addEventListener("mousedown", function () {playSample ("hihat.mp3")});
    document.querySelector("#c").addEventListener("mousedown", function () {playSample ("C.mp3")});
    document.querySelector("#f").addEventListener("mousedown", function () {playSample ("F.mp3")});
    document.querySelector("#g").addEventListener("mousedown", function () {playSample ("G.mp3")});
    document.querySelector("#a").addEventListener("mousedown", function () {playSample ("A.mp3")});
    document.querySelector("#voc1").addEventListener("mousedown", function () {playSample ("laugh1.mp3")});
    document.querySelector("#voc2").addEventListener("mousedown", function () {playSample ("laugh2.mp3")});

    document.querySelector("#play").addEventListener("click", arrays)
})



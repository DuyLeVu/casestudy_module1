class Sound {
    sound;
    src;

    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.sound.loop = false
        this.sound.volume = 0.5
        this.sound.playbackRate = 1
    }

    play() {
        this.sound.play();
    }

    stop() {
        this.sound.pause();
    }

    loop() {
        this.sound.loop = true;
    }

    speedUp() {
        this.sound.playbackRate += 0.15;
    }
}

let background = new Sound('sound/bensound-epic.m4a');
background.speedUp();

let move = new Sound('sound/ZN6M58Y-sword-slash-a (mp3cut.net).mp3');
let gameVictory = new Sound('sound/DRKGYPE-victory.mp3');
let shapeCrash = new Sound('sound/T9P3QW5-concrete-crash-impact-02.mp3');
let gameOver = new Sound('sound/QX2PTC7-sad-trombone-wah-wah-accent (mp3cut.net).mp3');



(function() {

    function playMusic() {
        var myAudio = document.getElementById('playAudio');
        if (myAudio.duration > 0 && !myAudio.paused) {
            //Its playing...do your job

        } else {
            myAudio.play()
                //Not playing...maybe paused, stopped or never played.

        }
    }

    //fields
    var canvas = document.getElementById("canvas");
    var body = document.getElementsByTagName("body")[0];
    var positions = []
    var ctx = canvas.getContext("2d");
    const MINPETAL = 5
    const MAXPETAL = 13
    var pistilC, petalC, pistilC2, petalC2

    /*Initialize */
    body.addEventListener("click", function(ev) {
        playMusic()
    })


    /*utility*/
    function scaleCanvas() {
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight);
        console.log(`width:${w},height:${h}`)
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        var scale = 1; //window.devicePixelRatio;

        canvas.width = Math.floor(w * scale);
        canvas.height = Math.floor(h * scale);
        ctx.scale(scale, scale);
    }

    function distance(p1, p2) {
        return Math.floor(Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)))
    }

    function randomColor(minSat = 0, maxSat = 100, minBright = 0, maxBright = 100) {
        this.h = getRandomInt(0, 360)
        this.s = getRandomInt(minSat, maxSat)
        this.l = getRandomInt(minBright, maxBright)
        this.hsl = () => { return `hsl(${this.h},${this.s}%,${this.l}%)` };
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }

    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function chance(limit = 0.5) {
        return Math.random() < limit;
    }

    function Point(x, y) {
        this.x = x
        this.y = y
    }
})("sweaverD.com");
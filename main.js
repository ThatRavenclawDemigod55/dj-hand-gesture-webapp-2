song1 = "" ;
song2 = "" ;

function preload() {
    song1 = loadSound("03 Spice Girls - Wannabe.mp3") ;
    song2 = loadSound("06 Queen - Another One Bites The Dust.mp3") ;
}


function setup() {
    canvas = createCanvas(500, 600) ;
    canvas.center() ;

    video = createCapture(VIDEO) ;
    video.hide() ;
}


function draw() {
    image(video, 0, 0, 500, 600) ;
}


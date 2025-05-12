let speed = 0;
let gravity = 0.3;
let score = 0;
let gameState = "start";
let startButton;
let restartButton;
let LandingSpeed = 2;

function setup() {
    createCanvas(1024, 1366);
    restartButton = createButton('↻');
    restartButton.position(450, 320);
    restartButton.mousePressed(restartGame);
    restartButton.hide();

    restartButton.style('color', 'black');
    restartButton.style('font-size', '170px');
    restartButton.style('border', 'none');
    restartButton.style('background', 'none');

    startButton = createButton('▶');
    startButton.position(460, 555);
    startButton.mousePressed(startGame);
    startButton.style('color', 'black');
    startButton.style('font-size', '190px');
    startButton.style('border', 'none');
    startButton.style('background', 'none');
}

function draw() {
    if (gameState === "start") {
        startScreen();
    } else if (gameState === "game") {
        gameScreen();
    } else if (gameState === "gameover") {
        gameover();
    } else if (gameState === "win") {
        win();
    }
}

//start screen
function startScreen() {
    background(220, 190, 165);

    //play circle
    noStroke();
    fill(170, 39, 65);
    ellipse(515, 690, 260, 260);

    //popcorn
    fill(250, 221, 191);
    ellipse(540, 958, 130, 130);
    ellipse(460, 928, 100, 100);
    ellipse(460, 1008, 110, 110);

    fill(211, 177, 143);
    ellipse(522, 950, 70, 70);
    ellipse(480, 945, 70, 70);
    ellipse(485, 988, 70, 70);

    fill(250, 221, 191);
    ellipse(540, 947, 70, 70);
    ellipse(460, 925, 70, 70);
    ellipse(480, 1005, 70, 70);

    //text
    fill(0);
    textSize(80);
    textStyle(BOLD);
    textFont("monospace");
    text("POPCORN PANIK!", 200, 350);

    //machine lampor etc
    fill(170, 39, 65);
    rect(0, 0, 70, 1366);
    rect(953, 0, 70, 1366);
    //left
    fill(255, 233, 145);
    ellipse(145, 100, 150, 150);
    ellipse(145, 500, 150, 150);
    ellipse(145, 900, 150, 150);
    ellipse(145, 1270, 150, 150);

    //right
    ellipse(880, 100, 150, 150);
    ellipse(880, 500, 150, 150);
    ellipse(880, 900, 150, 150);
    ellipse(880, 1270, 150, 150);
}

function startGame() {
    gameState = "game";
    startButton.hide();
}

//main game
function gameScreen() {
    background(220, 190, 165);
    ground();
    popcorn();
    pocornmachine();
}

//asphalt ground
function ground() {
    noStroke();
    //ground
    fill(170, 39, 65);
    rect(0, 1018, 1366, 348);
    //stekpanna
    fill(0);
    rect(340, 968, 350, 50);
    //handle
    rect(660, 980, 160, 25, 5);
    //olja
    fill(194, 133, 64);
    rect(365, 958, 300, 10);
    //table design
    fill(30);
    rect(40, 1018, 100, 348);
    rect(310, 1018, 100, 348);
    rect(620, 1018, 100, 348);
    rect(880, 1018, 100, 348);

    fill(255);
    rect(140, 1018, 20, 348);
    rect(410, 1018, 20, 348);
    rect(720, 1018, 20, 348);
    rect(980, 1018, 20, 348);
}

let x = 520;
let y = 15;

//the popcorn
function popcorn() {
    //popcornsead
    speed += gravity;
    y += speed;

    if (keyIsDown(UP_ARROW) || mouseIsPressed) {
        speed -= 0.8;
    }

    if (y + 80 > 958) {
        y = 958 - 80;
        if (speed > LandingSpeed) {
            gameState = "gameover";
        } else {
            gameState = "win";
            speed = 0;
        }
    }

    // If the game is in "win" state, draw the popcorn shape
    if (gameState === "win") {
        fill(250, 221, 191);
        ellipse(x + 50, 958 - 80, 130, 130); // 570, 878
        ellipse(x - 20, 958 - 110, 100, 100); // 500, 848
        ellipse(x - 20, 958 - 30, 110, 110); // 500, 928

        fill(211, 177, 143);
        ellipse(x + 42, 958 - 88, 70, 70); // 562, 870
        ellipse(x, 958 - 93, 70, 70); // 520, 865
        ellipse(x + 5, 958 - 50, 70, 70); // 525, 908

        fill(250, 221, 191);
        ellipse(x + 60, 958 - 91, 70, 70); // 580, 867
        ellipse(x - 20, 958 - 113, 70, 70); // 500, 845
        ellipse(x, 958 - 33, 70, 70); // 520, 925
    }


    if (gameState === "gameover") {
        fill(82, 14, 0);
        arc(x, y + 40, 190, 90, HALF_PI, -HALF_PI, CHORD);
        arc(x, y + 40, 190, 90, -HALF_PI, HALF_PI, CHORD);
    }


    if (gameState !== "gameover" && gameState !== "win") {
        fill(185, 125, 60);
        arc(x, y + 40, 190, 90, HALF_PI, -HALF_PI, CHORD);
        fill(210, 155, 90);
        arc(x, y + 40, 190, 90, -HALF_PI, HALF_PI, CHORD);
    }
}

function pocornmachine() {
    //popcornmachine
    noStroke();
    fill(120, 90, 65, 80);
    rect(350, 0, 350, 250);
    fill(170, 39, 65);
    rect(330, 0, 50, 270);
    rect(650, 0, 50, 270);

    fill(255, 233, 145);
    ellipse(305, 40, 50, 50);
    ellipse(305, 130, 50, 50);
    ellipse(305, 220, 50, 50);

    ellipse(725, 40, 50, 50);
    ellipse(725, 130, 50, 50);
    ellipse(725, 220, 50, 50);
}

//gameover + restart
function gameover() {
    fill(170, 39, 65);
    textStyle(BOLD);
    textSize(80);
    textAlign(CENTER, CENTER);
    text("AJDÅ!", 520, 600);
    restartButton.show();
}

// Win screen 
function win() {

    fill(187, 255, 153);
    textStyle(BOLD);
    textSize(80);
    textAlign(CENTER, CENTER);
    text("BRA JOBBAT!", 520, 600);
    restartButton.show();
}

// Game restart logic
function restartGame() {
    gameState = "game";
    restartButton.hide();
    x = 520;
    y = 15;
    speed = 0;
    loop();
}

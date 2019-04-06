const canvas = document.querySelector("canvas");
canvas.width = innerWidth;

const cxt = canvas.getContext("2d");
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}
const imgs = ["imgs/enemy.png", "imgs/enemy.flip.png", "imgs/war.spread.png", "imgs/war.spread.right.png"];
let hit = false;

//  Event listeners 

addEventListener("mousemove", function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    // console.log(event)
})

addEventListener('resize', () => {
    canvas.width = innerWidth

    init()
})
// keyboard functions
function Keyboarder() {
    let keyState = {};
    window.onkeydown = function(e) { 
        keyState[e.keyCode] = true;
    };
    window.onkeyup = function(e) { 
        keyState[e.keyCode] = false;
    };
    this.isDown = function(keyCode) {
        return keyState[keyCode] === true;
    };
    this.KEYS = { 
        LEFT: 37,
        RIGHT: 39,
        SPACE: 32,
        UP: 38,
        DOWN: 40
    };
};


// Objects
function Player(name) {
    let srcX; 
    let srcY;
    let attackPos = 1;
    let idlePos = 0;
    let sheetWidth = 1200;
    let sheetHeight = 416;

    let cols = 5;
    let rows = 4;
    this.frameWidth = sheetWidth / cols;
    this.frameHeight = sheetHeight / rows;
    let currentFrame = 0;
    this.image = new Image();
    this.image.src = imgs[2];
    this.width 
    this.name = name;
    this.x = 300;
    this.y = 300;
    this.attackValue = 2;
    // this.dx = 0;
    // this.dy = 0;
    // this.radius = 40;
    this.color = "black";
    // this.moveSpeed = 2

    this.hp = 10;
    this.keyboarder = new Keyboarder();
    this.draw = function() {
        cxt.drawImage(this.image, srcX, srcY, this.frameWidth, this.frameHeight, this.x,this.y,this.frameWidth,this.frameHeight)
    }
    this.update = function() {
        currentFrame = ++currentFrame % cols;
        srcX = currentFrame * this.frameWidth;
        
        if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            // console.log("left key press")
            this.image.src = imgs[2];
            this.x -=4 ;
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.image.src = imgs[3];
            this.x += 4;
        }  else if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
            srcY = attackPos * this.frameHeight;
            this.attack();
        } /*else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
            
            this.y -= 4;
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {

            this.y += 4;
        } */else {
            srcY = idlePos * this.frameHeight;
        }
        this.draw();

    }
    this.attack = function() {
        if (player1.x < enemy.x + enemy.frameWidth-100&&
            player1.x + player1.frameWidth-50> enemy.x){
            console.log("has hit!")
            enemy.hp -= this.attackValue;
            hit = true;
        } else {
            
        }
    }

}


function Enemy() {
    let srcX; 
    let srcY;
    let attackPos = 1;
    let getHit = 2;
    let idlePos = 0;
    let sheetWidth = 1240;
    let sheetHeight = 453;

    let cols = 5;
    let rows = 3;
    this.frameWidth = sheetWidth / cols;
    this.frameHeight = sheetHeight / rows;
    let currentFrame = 0;
    this.image = new Image();
    this.image.src = imgs[0];
    this.velocity = 10;
    this.name = name;
    this.x = 200;
    this.y = 250;
    this.moveSpeed = 2
    this.hp = Math.floor((Math.random())* 4)+1;
    this.draw = function() {
        cxt.drawImage(this.image, srcX, srcY, this.frameWidth, this.frameHeight, this.x,this.y,this.frameWidth,this.frameHeight)
   
    }

    this.enemyMotion = function() {
        if (this.x + this.frameWidth >= innerWidth) {
            this.velocity = -this.velocity;
            this.image.src = imgs[1];
        } else if(this.x <= 0 ) {
            this.image.src = imgs[0];
            this.velocity = -this.velocity;
        }
        this.x += this.velocity; 
    }
    this.enemyPostionState = function() {
        if (hit === true) {
            console.log("enemy got hit")
            // currentFrame = ++currentFrame % cols;
            if (this.image.src === "file:///Users/mioji/seiLA/rpg_game/imgs/enemy.flip.png"){
                console.log("worked!")
                srcX = 1 * this.frameWidth;
                srcY = getHit * this.frameHeight;
                this.x += 24;
            } else
            srcX = 3 * this.frameWidth;
            srcY = getHit * this.frameHeight;
            this.x -= 12;
        } else {
            currentFrame = ++currentFrame % cols;
            srcX = currentFrame * this.frameWidth;
            srcY = idlePos * this.frameHeight; 
        } 
    }
    this.update = function() {
        this.enemyPostionState();
        this.draw();
        this.enemyMotion();  
    }
}

// creating characters on the board
let player1;
let enemy;
function init() {
    player1 = new Player("Josh")
    enemy = new Enemy()

}


// Interval update
const animate2 = setInterval(function(){
    cxt.clearRect(0,0, innerWidth,innerHeight);
    player1.update();
    enemy.update();
    hit = false;
    
}, 100)
//  
init();
// animate();

// player class 
// includes HP, defense, attack, maybe magic power, and special?
// defend? 
// name, role(mage, archer, knight)

// extend player class for each role? 
// bow, sword, lance, staff

//enemy class
// multiple enemys with bosses
// HP and attack. Boss has special
// HP depends on round(can adjust in game rounds)

// game object
// rounds/waves
// score
// game init function
// create enemy function here?

// game init function
// game start ==> pick your role
// battle fucntion
// place setting
// place players(selected)
// bring in random enemys

// battle function
// whose turn is it?
// how many enemys are left
// attack, defend features?
// enemy attack auto on turn 


// gameloop
// check player hp
// check enemy hp
// 



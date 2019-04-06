const canvas = document.querySelector("canvas");
canvas.width = innerWidth;

const cxt = canvas.getContext("2d");
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

let hit = false;
// function collision() {
//     else {
//         return false;
//     }s
// } 
function getDistance(x1, y1, x2, y2){ 
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
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

function Keyboarder() {
    let keyState = {};
    window.onkeydown = function(e) { 
        keyState[e.keyCode] = true;
        // console.log(e.keyCode)
        // console.log(keyState)

    };
    window.onkeyup = function(e) { 
        keyState[e.keyCode] = false;
        // console.log(e.keyCode)
        // console.log(keyState)

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
    const image = new Image();
    image.src ="imgs/war.spread.png";
    this.width 
    this.name = name;
    this.x = 300;
    this.y = 300;
    this.attackValue = 2;
    // this.dx = 0;
    // this.dy = 0;
    // this.radius = 40;
    // this.minRadius = radius;
    this.color = "black";
    // this.moveSpeed = 2

    this.hp = 10;
    this.keyboarder = new Keyboarder();
    this.draw = function() {
        cxt.drawImage(image, srcX, srcY, this.frameWidth, this.frameHeight, this.x,this.y,this.frameWidth,this.frameHeight)
        // cxt.beginPath();
        // cxt.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        // cxt.fillStyle = this.color;
        // cxt.fill();
        // cxt.moveTo(this.x,this.y);
        // cxt.lineTo(this.x+50,this.y);
        // cxt.lineTo(this.x+60,this.y-20);
        // cxt.stroke();
        // cxt.closePath

    }
    this.update = function() {
        currentFrame = ++currentFrame % cols;
        srcX = currentFrame * this.frameWidth;
        
        if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            // console.log("left key press")
            image.src = "imgs/war.spread.png"
            this.x -=4 ;
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            image.src = "imgs/war.spread.right.png"
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

const imgs = ["imgs/enemy.png", "imgs/enemy.flip.png"];
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
    // this.width = width;
    // this.height = height;
    // this.radius = radius;
    // // this.minRadius = radius;
    // this.color = color;
    this.moveSpeed = 2
    this.hp = Math.floor((Math.random())* 4)+1;
    this.draw = function() {
        cxt.drawImage(this.image, srcX, srcY, this.frameWidth, this.frameHeight, this.x,this.y,this.frameWidth,this.frameHeight)
        // cxt.fillStyle = "rgba(255, 255, 0, 0.5)"
        // cxt.fillRect(this.x, this.y, this.width, this.height)
       
        // cxt.beginPath();
        // cxt.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        // cxt.fillStyle = this.color;
        // cxt.fill();
        // cxt.closePath
    }
    this.update = function() {
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
        if (this.x + this.frameWidth >= innerWidth) {
            this.velocity = -this.velocity;
            this.image.src = imgs[1];
        } else if(this.x <= 0 ) {
            this.image.src = imgs[0];
            this.velocity = -this.velocity;
        }
        this.x += this.velocity;  
        this.draw();  
    }
}

// creating characters on the board
let player1;
let enemy;
function init() {
    player1 = new Player("Josh")
    enemy = new Enemy()

}



let animate2 = setInterval(function(){
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



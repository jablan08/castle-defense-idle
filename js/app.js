const canvas = document.querySelector("canvas");
canvas.width = innerWidth;

const cxt = canvas.getContext("2d");
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}


//  Event listeners 

addEventListener("mousemove", function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
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
        SPACE: 32
    };
};


// Objects
function Player(name) {
    this.name = name;
    this.x = 300;
    this.y = 300;
    this.dx = 0;
    this.dy = 0;
    this.radius = 40;
    // this.minRadius = radius;
    this.color = "black";
    this.moveSpeed = 2
    this.hp = 10;
    this.keyboarder = new Keyboarder();
    this.draw = function() {
        cxt.beginPath();
        cxt.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        cxt.fillStyle = this.color;
        cxt.fill();
        cxt.closePath
     
    }
   
    this.update = function() {
        if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
            // console.log("left key press")
            this.x -=2 ;
        } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
            this.x += 2;
        }
        this.draw();

    }
    this.attack = function() {

    }

}

function Enemy(x,y,radius,color) {
    this.x = x;
    this.y = y;
    // this.dx = dx;
    // this.dy = dy;
    this.radius = radius;
    // this.minRadius = radius;
    this.color = color;
    this.moveSpeed = 2
    this.hp = Math.floor((Math.random())* 4)+1;
    this.draw = function() {
        cxt.beginPath();
        cxt.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        cxt.fillStyle = this.color;
        cxt.fill();
        cxt.closePath
    }
    this.update = function() {
        this.draw();
    }
}


// creating characters on the board
let player1;
let enemey;
function init() {
    player1 = new Player("Josh")
    enemey = new Enemy(600, 300, 50, "red")

}




const animate = () => {
    requestAnimationFrame(animate);
    cxt.clearRect(0,0, innerWidth,innerHeight);
    player1.update();
    enemey.update();
}
init();
animate();

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



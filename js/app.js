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

// Objects
function Player(x,y,radius,color, moveSpeed) {
    this.x = x;
    this.y = y;
    // this.dx = dx;
    // this.dy = dy;
    this.radius = radius;
    // this.minRadius = radius;
    this.color = color;
    this.moveSpeed = 2
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

function Enemy(x,y,radius,color, moveSpeed) {
    this.x = x;
    this.y = y;
    // this.dx = dx;
    // this.dy = dy;
    this.radius = radius;
    // this.minRadius = radius;
    this.color = color;
    this.moveSpeed = 2
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
    player1 = new Player(300, 300, 40, "black")
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



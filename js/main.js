


const canvas = document.querySelector("canvas");
canvas.width = innerWidth;

const cxt = canvas.getContext("2d");
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}


// Game checker

const game = {
    wave: 1,
    score: 0,





    checkDead() {
       
    }

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



// creating characters on the board
let warrior;
// let enemies = [];
function init() {
    warrior = new Player(1200,416,5,4,300,300,"warrior");
    // for (let i = 0; i < 3; i++) {
    //     enemies.push(new Enemy());
    // }

}


// Interval update
const animate2 = setInterval(function(){
    cxt.clearRect(0,0, innerWidth,innerHeight);
    warrior.update();
    // enemies.forEach(enemy => {
    //     enemy.update(enemies);
    // })
    // enemy.update();
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






const canvas = document.querySelector("canvas");

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

// addEventListener('resize', () => {

//     init()
// })
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
// let ran = Math.floor(Math.random()*6);
function init() {
    let enemies = [
    
        [
            lizard = new Enemy(1240,453,5,3,canvas.width*.10,65,"lizard")
        ],
        [
            dragon = new Enemy(1290,1045,5,5,canvas.width*.08,225,"dragon")
        ],
        [
           slime = new Enemy(705,535,5,5,canvas.width*.10,175,"slime")
        ],
        [
            snake = new Enemy(735,376,5,4,canvas.width*.10,65,"snake")
        ],
        [
            dino = new Enemy(770,472,5,4,canvas.width*.10,300,"dino")
        ],
    ]
    warrior = new Player(1200,416,5,4,canvas.width*.72,300,"warrior");
    archer = new Player(1264,1038,8,6,canvas.width*.75, 20,"archer")
    mage = new Player(966,636,6,6,canvas.width*.75,200,"mage")
    // enemy = new Enemy(enemies[ran][0],enemies[ran][1],enemies[ran][2],enemies[ran][3],enemies[0][4],enemies[0][5],
    //     enemies[ran][6],enemies[ran][7]);
    // enemy2 = new Enemy(enemies[ran][0],enemies[ran][1],enemies[ran][2],enemies[ran][3],enemies[ran][4],enemies[ran][5],
    //     enemies[ran][6],enemies[ran][7]);
    
    // for (let i = 0; i < 3; i++) 3
    //     enemies.push(new Enemy());
    // }

}


// Interval update
const animate2 = setInterval(function(){
    cxt.clearRect(0,0, innerWidth,innerHeight);
    warrior.update();
    mage.update();
    archer.update();
    lizard.update();
    dragon.update();
    // slime.update();
    // snake.update();
    // dino.update();

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






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

addEventListener("click", function(event){
    if (event.x > 407 && event.x < 520 && event.y < 372 && event.y > 330) {
        console.log("You clicked the dino.")
    } else if (event.x > 409 && event.x < 473 && event.y < 233 && event.y > 196) {
        console.log("You clicked the slime.")
    } else if (event.x > 416 && event.x < 485 && event.y < 112 && event.y > 67) {
        console.log("You clicked the snake.")
    }
    // mouse.x = event.clientX;
    // mouse.y = event.clientY;
    console.log(event.x,event.y)
})

window.addEventListener("click", (e)=>{
    console.log(e.target);
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
// function init() {
    let enemies = [
    
        [
            lizard = new Enemy(1240,453,5,3,canvas.width*.25,210,"lizard")
        ],
        [
            dragon = new Enemy(1290,1045,5,5,canvas.width*.06,225,"dragon")
        ],
        [
           slime = new Enemy(705,535,5,5,canvas.width*.25,245,"slime")
        ],
        [
            snake = new Enemy(735,376,5,4,canvas.width*.25,370,"snake")
        ],
        [
            dino = new Enemy(770,472,5,4,canvas.width*.10,300,"dino")
        ],
    ]
    warrior = new Player(1200,416,5,4,canvas.width*.55,300,"warrior");
    archer = new Player(1264,1038,8,6,canvas.width*.75, 310,"archer")
    mage = new Player(966,636,6,6,canvas.width*.75,250,"mage")
    // enemy = new Enemy(enemies[ran][0],enemies[ran][1],enemies[ran][2],enemies[ran][3],enemies[0][4],enemies[0][5],
    //     enemies[ran][6],enemies[ran][7]);
    // enemy2 = new Enemy(enemies[ran][0],enemies[ran][1],enemies[ran][2],enemies[ran][3],enemies[ran][4],enemies[ran][5],
    //     enemies[ran][6],enemies[ran][7]);
    
    // for (let i = 0; i < 3; i++) 3
    //     enemies.push(new Enemy());
    // }
// }
// init();


// Interval update
const animate2 = setInterval(function(){
    cxt.clearRect(0,0, innerWidth,innerHeight);
    warrior.update();
    mage.update();
    archer.update();
    // lizard.update();
    // dragon.update();
    slime.update();
    snake.update();
    dino.update();
    hit = false;
    
}, 100)
//  

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






const canvas = document.querySelector("canvas");
const currentTarget = document.querySelector(".currentTarget");
const cxt = canvas.getContext("2d");
const wave = document.querySelector(".wave");
const container = document.querySelector(".container");
const startButton = document.getElementById("startButton");
const splashScreen = document.getElementById("splashScreen")
const attackButton = document.querySelector(".attack");

const warriorHpBar = document.querySelector(".warHpBar");
const warAttkBar = document.querySelector(".warAttkBar");

const archerAttkBar = document.querySelector(".archerAttkBar");
const archerHpBar = document.querySelector(".archerHpBar");

const mageHpBar = document.querySelector(".mageHpBar");
const mageAttkBar = document.querySelector(".mageAttkBar");


const dinoTag = document.querySelector(".dino");
const dinoHpBar = document.querySelector(".dinoHpBar");
const dinoAttkBar = document.querySelector(".dinoAttkBar");

const snakeTag = document.querySelector(".snake");
const snakeAttkBar = document.querySelector(".snakeAttkBar");
const snakeHpBar = document.querySelector(".snakeHpBar");
const slimeTag = document.querySelector(".slime");
const slimeHpBar = document.querySelector(".slimeHpBar");
const slimeAttkBar = document.querySelector(".slimeAttkBar");

const lizTag = document.querySelector(".lizard");
const lizHpBar = document.querySelector(".lizHpBar");
const lizAttkBar = document.querySelector(".lizAttkBar");

const dragonTag = document.querySelector(".dragon");
const dragHpBar = document.querySelector(".dragHpBar");
const dragAttkBar = document.querySelector(".dragAttkBar");

// Game checker

const game = {
   
    mobs: 5,
    wave() {
            wave.innerText = `Enemies remaining: ${this.mobs}`
    },
    score: 0,
    target: "Dino",
    CPUtarget: ["warrior", "archer", "mage"],
    finalBoss: false,
    run: false,
    update(){
        this.deadEnemy();
        // this.wave();
    },
    newWave() {
            this.finalBoss = true;
            dragonTag.style.display = "block";
            dragAttkBar.style.display = "block";
            dragHpBar.style.display = "block";

            lizTag.style.display = "block";
            lizAttkBar.style.display = "block";
            lizHpBar.style.display = "block";
    },
    deadEnemy(){
        if (dino.alive===false)
        {
            dinoTag.style.display = "none";
            dinoAttkBar.style.display = "none";
            dinoHpBar.style.display = "none";
        } 
        if (slime.alive===false){
            slimeTag.style.display = "none";
            slimeAttkBar.style.display = "none";
            slimeHpBar.style.display = "none";
        } 
        if (snake.alive===false){
            snakeTag.style.display = "none";
            snakeAttkBar.style.display = "none";
            snakeHpBar.style.display = "none";
        }
        if (lizard.alive===false){
            lizTag.style.display = "none";
            lizAttkBar.style.display = "none";
            lizHpBar.style.display = "none";
        }
        if (dragon.alive===false){
            dragonTag.style.display = "none";
            dragAttkBar.style.display = "none";
            dragHpBar.style.display = "none";
        }
        if (dino.alive === false && slime.alive===false && snake.alive === false) {
            this.newWave();
        }
    }
}


//  Event listeners 

addEventListener("click", function(event){
    console.log(event.x,event.y)
    if (event.x > 398 && event.x < 524 && event.y < 452 && event.y > 403 && dino.alive===true) {
        currentTarget.innerText = "Current Target: Dino";
        game.target = "Dino";
    } else if (event.x > 520 && event.x < 601 && event.y < 385 && event.y > 335 && slime.alive===true) {
        currentTarget.innerText = "Current Target: Slime";
        game.target = "Slime";
    } else if (event.x > 519 && event.x < 608 && event.y < 493 && event.y > 445 && snake.alive===true) {
        currentTarget.innerText = "Current Target: Snake";
        game.target = "Snake";
    }
})
// Dragon and Lizard event listeners.

addEventListener("click", function(event){
    if (event.x > 382 && event.x < 565 && event.y < 458 && event.y > 327 && game.finalBoss ===true) {
        currentTarget.innerText = "Current Target: Dragon";
        game.target = "Dragon";
        // console.log("You clicked the dragon")
    } else if (event.x > 549 && event.x < 692 && event.y < 388 && event.y > 293 && game.finalBoss ===true) {
        currentTarget.innerText = "Current Target: Lizard";
        game.target = "Lizard";
        // console.log("You clicked the lizard.")
    }
    // console.log(event.x,event.y)
})
// Splash Screen and Start Button
startButton.addEventListener("click", ()=>{
    game.run = true;
    splashScreen.style.animation = "fadeout 3s";
    setTimeout(()=>{
        splashScreen.style.display = "none";
        container.style.display = "block";
    },1000)
   
})

attackButton.addEventListener("click", ()=>{
    console.log("workerd")
})

// Sprites 
let enemies = [
    [
        lizard = new Enemy(1240,453,5,3,canvas.width*.25,210,"lizard",1,.75,10)
    ],
    [
        dragon = new Enemy(1290,1045,5,5,canvas.width*.06,225,"dragon",1,.50,20)
    ],
    [
        slime = new Enemy(705,535,5,5,canvas.width*.25,245,"slime",3,1,4)
    ],
    [
        snake = new Enemy(735,376,5,4,canvas.width*.25,370,"snake",1,1.25,5)
    ],
    [
        dino = new Enemy(770,472,5,4,canvas.width*.10,300,"dino",2,.75,3)
    ],
]
warrior = new Player(1200,416,5,4,canvas.width*.55,300,"warrior",1,.75,5);
archer = new Player(1264,1038,8,6,canvas.width*.75, 310,"archer",4,1.50,3)
mage = new Player(966,636,6,6,canvas.width*.75,250,"mage",4,.50,10)



// Interval update
const animate2 = setInterval(function(){
    cxt.clearRect(0,0, innerWidth,innerHeight);
    if (game.run === true){
    warrior.update();
    mage.update();
    archer.update();
    if (game.finalBoss ===true){
        lizard.update();
        dragon.update();
    } else {
    slime.update();
    snake.update();
    dino.update();}
    game.update();
    }
}, 100)


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
//
// how many enemys are left
// 
// enemy attack auto on turn 


// gameloop
// check player hp
// check enemy hp
// 



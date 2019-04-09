


const canvas = document.querySelector("canvas");
const cxt = canvas.getContext("2d");

const wave = document.querySelector(".wave");
const currentTarget = document.querySelector(".currentTarget");

const startButton = document.getElementById("startButton");
const playAgainButton = document.getElementById("playAgainButton");
const attackButton = document.querySelector(".attack");
const itemButton = document.querySelector(".items");
const healBar = document.querySelector(".healBar")
const specialBar = document.querySelector(".specialBar");

const title = document.querySelector(".title");
const sireMsg = document.querySelector(".sireMsg");
const splashContent = document.querySelector(".splash-content")
const winner = document.querySelector(".winner");
const loser = document.querySelector(".loser")
const body = document.querySelector("body");
const container = document.querySelector(".container");
const screen = document.getElementById("screen");
const splashScreen = document.getElementById("splashScreen")

const warTag = document.querySelector(".warTag");
const warriorHpBar = document.querySelector(".warHpBar");
const warAttkBar = document.querySelector(".warAttkBar");

const archerTag = document.querySelector(".archerTag");
const archerAttkBar = document.querySelector(".archerAttkBar");
const archerHpBar = document.querySelector(".archerHpBar");

const mageTag = document.querySelector(".mageTag");
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
    specialReady: false,
    healReady: false,
    playersDead: false,
    gameOver(){
        if (this.playersDead === true){
            setTimeout(()=>{
            this.run = false;
            title.style.innerText = "GAME OVER";
            container.style.animation = "fadeout 2s";
            container.style.display = "none";
            splashScreen.style.display = "block";
            splashScreen.style.animation = "fadein 3s";
            playAgainButton.style.display = "inline";
            loser.style.display = "block";
            }, 1000)
        } else {
            setTimeout(()=>{
            this.run = false;
            title.style.innerText = "HOOORAYYYY!";
            container.style.animation = "fadeout 3.5s";
            container.style.display = "none";
            splashScreen.style.display = "block";
            splashScreen.style.animation = "fadein 3s";
            playAgainButton.style.display = "inline";
            winner.style.display = "block";
        }, 1000)
    }
        
    },
    update(){
        if (this.mobs === 2 && this.finalBoss === false) {
            setTimeout(()=>{
                this.newWave();
            },500)   
        } else if (this.mobs === 0 || this.playersDead === true){
            this.gameOver();
        }

    },
    newWave() {
        this.run = false;
        this.finalBoss = true;
        container.style.animation = "fadeout 3s";
        setTimeout(()=>{
        screen.style.backgroundImage = "url(css/background/castle.png)";
        container.style.animation = "fadein 3s";
        this.run = true;
        currentTarget.innerText = "Current Target: Lizard";
        game.target = "Lizard";
        },1500)
        dragonTag.style.display = "block";
        dragAttkBar.style.display = "block";
        dragHpBar.style.display = "block";

        lizTag.style.display = "block";
        lizAttkBar.style.display = "block";
        lizHpBar.style.display = "block";

    },
    deadPlayer() {
        if (warrior.alive===false){
            warTag.style.display = "none";
            warAttkBar.style.display = "none";
            warriorHpBar.style.display = "none";
        } 
        if (archer.alive===false){
            archerTag.style.display = "none";
            archerAttkBar.style.display = "none";
            archerHpBar.style.display = "none";
        } 
        if (mage.alive===false){
            mageTag.style.display = "none";
            mageAttkBar.style.display = "none";
            mageHpBar.style.display = "none";
        }
    },
    deadEnemy(){
        if (dino.alive===false){
            dinoTag.style.display = "none";
            dinoAttkBar.style.display = "none";
            dinoHpBar.style.display = "none";
            if (snake.alive===true) {
                currentTarget.innerText = "Current Target: Snake";
                game.target = "Snake";
            } else {
                currentTarget.innerText = "Current Target: Slime";
                game.target = "Slime"
            }
        } 
        if (slime.alive===false){
            slimeTag.style.display = "none";
            slimeAttkBar.style.display = "none";
            slimeHpBar.style.display = "none";
            if (snake.alive===true) {
                currentTarget.innerText = "Current Target: Snake";
                game.target = "Snake";
            } else {
                currentTarget.innerText = "Current Target: Dino";
                game.target = "Dino"
            }
        } 
        if (snake.alive===false){
            snakeTag.style.display = "none";
            snakeAttkBar.style.display = "none";
            snakeHpBar.style.display = "none";
            if (dino.alive===true) {
                currentTarget.innerText = "Current Target: Dino";
                game.target = "Dino";
            } else {
                currentTarget.innerText = "Current Target: Slime";
                game.target = "Slime"
            }
        }
        if (lizard.alive===false){
            lizTag.style.display = "none";
            lizAttkBar.style.display = "none";
            lizHpBar.style.display = "none";
            if (dragon.alive === true) {
                currentTarget.innerText = "Current Target: Dragon";
                game.target = "Dragon";
            }
        }
        if (dragon.alive===false){
            dragonTag.style.display = "none";
            dragAttkBar.style.display = "none";
            dragHpBar.style.display = "none";
            if (lizard.alive===true) {
                currentTarget.innerText = "Current Target: Lizard";
                game.target = "Lizard";
            }
        }
        // if (dino.alive === false && slime.alive===false && snake.alive === false && lizard.alive===true) {
        // } else if (lizard.alive === false) {
        //     currentTarget.innerText = "Current Target: Dragon";
        //     game.target = "Dragon";
        // }
    }
}


//  Event listeners 

addEventListener("click", function(event){
    if (event.x > 398 && event.x < 524 && event.y < 452 && event.y > 403 && dino.alive===true || event.target.classList[0] === "dino") {
        currentTarget.innerText = "Current Target: Dino";
        game.target = "Dino";
    } else if (event.x > 520 && event.x < 601 && event.y < 385 && event.y > 335 && slime.alive===true || event.target.classList[0] === "slime") {
        currentTarget.innerText = "Current Target: Slime";
        game.target = "Slime";
    } else if (event.x > 519 && event.x < 608 && event.y < 493 && event.y > 445 && snake.alive===true || event.target.classList[0] === "snake") {
        currentTarget.innerText = "Current Target: Snake";
        game.target = "Snake";
    }
})
// Dragon and Lizard event listeners.

addEventListener("click", function(event){
    if (event.x > 382 && event.x < 565 && event.y < 458 && event.y > 327 && game.finalBoss ===true || event.target.classList[0] === "dragon") {
        currentTarget.innerText = "Current Target: Dragon";
        game.target = "Dragon";
    } else if (event.x > 549 && event.x < 692 && event.y < 388 && event.y > 293 && game.finalBoss ===true || event.target.classList[0] === "lizard") {
        currentTarget.innerText = "Current Target: Lizard";
        game.target = "Lizard";
    }
})
// Splash Screen and Start Button
startButton.addEventListener("click", ()=>{
    game.run = true;
    splashScreen.style.animation = "fadeout 3s";
    setTimeout(()=>{
        startButton.style.display = "none";
        splashContent.style.display = "none";
        splashScreen.style.display = "none";
        sireMsg.style.display = "none";
        splashScreen.style.animation = "";
        container.style.display = "block";
    },1000)
   
})
playAgainButton.addEventListener("click", ()=>{
    window.location.reload();
})
attackButton.addEventListener("click", ()=>{
    if (game.specialReady===true) {
        warrior.allAttack();
        archer.allAttack();
        mage.allAttack();
        if (game.finalBoss === false) {
            dinoHpBar.style.width = `${dino.hp -= 20}%`;
            slimeHpBar.style.width = `${slime.hp -= 20}%`;
            snakeHpBar.style.width = `${snake.hp -= 20}%`;
        } else if (game.finalBoss === true) {
            lizHpBar.style.width = `${lizard.hp -= 20}%`
            dragHpBar.style.width = `${dragon.hp -= 20}%`
        }
    }
})

itemButton.addEventListener("click", ()=>{
    if (game.healReady===true) {
        mage.healthGain();
        body.style.animation = "healFlash 2s";
        setTimeout(()=>{
            body.style.animation = "";
        }, 2000)
    }
})
// Sprites 
let enemies = [
    [
        lizard = new Enemy(1240,453,5,3,canvas.width*.25,210,"lizard",1,1.20,15)
    ],
    [
        dragon = new Enemy(1290,1045,5,5,canvas.width*.06,225,"dragon",1,1,21.5)
    ],
    [
        slime = new Enemy(705,535,5,5,canvas.width*.25,245,"slime",3,1,9)
    ],
    [
        snake = new Enemy(735,376,5,4,canvas.width*.25,370,"snake",1,1.25,8)
    ],
    [
        dino = new Enemy(770,472,5,4,canvas.width*.10,300,"dino",2,.75,10)
    ],
]
warrior = new Player(1200,416,5,4,canvas.width*.55,300,"warrior",1,.75,10);
archer = new Player(1264,1038,8,6,canvas.width*.75, 310,"archer",4,1.50,5.5)
mage = new Player(966,636,6,6,canvas.width*.75,250,"mage",4,.50,15)



// Interval update
const animate2 = setInterval(function(){
    cxt.clearRect(0,0, innerWidth,innerHeight);
    if (game.run === true){
    warrior.update();
    mage.update();
    archer.update();
    game.update();
        if (game.finalBoss ===true){
            lizard.update();
            dragon.update();
        } else {
            slime.update();
            snake.update();
            dino.update();
        }     
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



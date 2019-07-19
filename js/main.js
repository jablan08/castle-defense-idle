
const canvas = document.querySelector("canvas");
const cxt = canvas.getContext("2d");

const wave = document.querySelector(".wave");
const currentTarget = document.querySelector(".currentTarget");

const musicPlay = document.querySelector(".musicPlay")
const musicPause = document.querySelector(".musicPause")
const startButton = document.getElementById("startButton");
const playAgainButton = document.getElementById("playAgainButton");
const attackButton = document.querySelector(".attack");
const healButton = document.querySelector(".items");
const healBar = document.querySelector(".healBar")
const specialBar = document.querySelector(".specialBar");
const howToPlay = document.querySelector("#howToPlay");

const music = document.querySelector("audio")
const modal = document.querySelector(".modal");
const span = document.querySelector(".close");
const title = document.querySelector(".title");
const sireMsg = document.querySelector(".sireMsg");
const splashContent = document.querySelector(".splash-content")
const winner = document.querySelector(".winner");
const loser = document.querySelector(".loser");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const screen = document.getElementById("screen");
const splashScreen = document.getElementById("splashScreen")
const idleImgs = document.querySelector(".idleImgs");

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

const specialSound = new Audio("music/special2.ogg");
const healSound = new Audio("music/heal.ogg");
const attackSound = new Audio("music/attack.ogg");
const enemyHit = new Audio("music/enemyHit2.ogg")

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
            music.src ="music/loser.ogg";
            setTimeout(() => {
                this.run = false;
                title.innerText = "GAME OVER";
                title.style.color = "red";
                container.style.animation = "fadeout 2s";
                container.style.display = "none";
                splashScreen.style.display = "block";
                splashScreen.style.animation = "fadein 3s";
                playAgainButton.style.display = "inline";
                loser.style.display = "block";
                music.play();
                music.loop = false;
            }, 1000)
        } else {
            music.src = "music/winner.ogg";
            setTimeout(() => {
                this.run = false;
                title.innerText = "HOOORAYYYY!";
                container.style.animation = "fadeout 3s";
                container.style.display = "none";
                splashScreen.style.display = "block";
                splashScreen.style.animation = "fadein 3s";
                playAgainButton.style.display = "inline";
                playAgainButton.innerText = "DEFEND AGAIN?"
                winner.style.display = "block";
                music.play();
                music.loop = false;
            }, 1000)
        }
    },
    update(){
        if (this.mobs === 2 && this.finalBoss === false) {
            setTimeout(() => {
                this.newWave();
            },500)   
        } else if (this.mobs === 0 || this.playersDead === true){
            this.gameOver();
        }
    },

    newWave() {
        this.run = false;
        this.finalBoss = true;
        music.src = "music/finalBoss.ogg";
        container.style.animation = "fadeout 3s";
        setTimeout(() => {
        screen.style.backgroundImage = "url(css/background/castle.png)";
        container.style.animation = "fadein 3s";
        this.run = true;
        currentTarget.innerText = "Current Target: Lizard";
        game.target = "Lizard";
        music.play();
        },1500)
        dragonTag.style.display = "block";
        dragAttkBar.style.display = "block";
        dragHpBar.style.display = "block";
        lizTag.style.display = "block";
        lizAttkBar.style.display = "block";
        lizHpBar.style.display = "block";
    },
    deadPlayer() {
        if (warrior.alive === false){
            warTag.style.display = "none";
            warAttkBar.style.display = "none";
            warriorHpBar.style.display = "none";
        } 
        if (archer.alive === false){
            archerTag.style.display = "none";
            archerAttkBar.style.display = "none";
            archerHpBar.style.display = "none";
        } 
        if (mage.alive === false){
            mageTag.style.display = "none";
            mageAttkBar.style.display = "none";
            mageHpBar.style.display = "none";
        }
    },
    deadEnemy(){
        if (dino.alive === false){
            dinoTag.style.display = "none";
            dinoAttkBar.style.display = "none";
            dinoHpBar.style.display = "none";
            if (snake.alive === true) {
                currentTarget.innerText = "Current Target: Snake";
                game.target = "Snake";
            } else {
                currentTarget.innerText = "Current Target: Slime";
                game.target = "Slime"
            }
        }; 
        if (slime.alive === false){
            slimeTag.style.display = "none";
            slimeAttkBar.style.display = "none";
            slimeHpBar.style.display = "none";
            if (snake.alive === true) {
                currentTarget.innerText = "Current Target: Snake";
                game.target = "Snake";
            } else {
                currentTarget.innerText = "Current Target: Dino";
                game.target = "Dino"
            }
        }; 
        if (snake.alive === false){
            snakeTag.style.display = "none";
            snakeAttkBar.style.display = "none";
            snakeHpBar.style.display = "none";
            if (dino.alive === true) {
                currentTarget.innerText = "Current Target: Dino";
                game.target = "Dino";
            } else {
                currentTarget.innerText = "Current Target: Slime";
                game.target = "Slime"
            }
        };
        if (lizard.alive===false){
            lizTag.style.display = "none";
            lizAttkBar.style.display = "none";
            lizHpBar.style.display = "none";
            if (dragon.alive === true) {
                currentTarget.innerText = "Current Target: Dragon";
                game.target = "Dragon";
            }
        }
        if (dragon.alive === false){
            dragonTag.style.display = "none";
            dragAttkBar.style.display = "none";
            dragHpBar.style.display = "none";
            if (lizard.alive === true) {
                currentTarget.innerText = "Current Target: Lizard";
                game.target = "Lizard";
            }
        };
    }
}

addEventListener("click", (event) => {
    if (event.x > 398 && event.x < 524 && event.y < 452 && event.y > 403 && dino.alive === true || event.target.classList[0] === "dino") {
        currentTarget.innerText = "Current Target: Dino";
        game.target = "Dino";
    } else if (event.x > 520 && event.x < 601 && event.y < 385 && event.y > 335 && slime.alive === true || event.target.classList[0] === "slime") {
        currentTarget.innerText = "Current Target: Slime";
        game.target = "Slime";
    } else if (event.x > 519 && event.x < 608 && event.y < 493 && event.y > 445 && snake.alive === true || event.target.classList[0] === "snake") {
        currentTarget.innerText = "Current Target: Snake";
        game.target = "Snake";
    }
})

addEventListener("click", (event) => {
    if (event.x > 382 && event.x < 565 && event.y < 458 && event.y > 327 && game.finalBoss === true || event.target.classList[0] === "dragon") {
        currentTarget.innerText = "Current Target: Dragon";
        game.target = "Dragon";
    } else if (event.x > 549 && event.x < 692 && event.y < 388 && event.y > 293 && game.finalBoss === true || event.target.classList[0] === "lizard") {
        currentTarget.innerText = "Current Target: Lizard";
        game.target = "Lizard";
    }
})

startButton.addEventListener("click", () => {
    game.run = true;
    splashScreen.style.animation = "fadeout 3s";
    music.src ="music/battle.ogg"
    setTimeout(() => {
        title.innerText = "";
        startButton.style.display = "none";
        splashContent.style.display = "none";
        splashScreen.style.display = "none";
        sireMsg.style.display = "none";
        howToPlay.style.display ="none";
        splashScreen.style.animation = "";
        container.style.display = "block";
        idleImgs.style.display = "none";
        modal.style.display = "none";
        music.play();
    },1000)
});

playAgainButton.addEventListener("click", () => {
    window.location.reload();
});

attackButton.addEventListener("click", () => {
    if (game.specialReady === true) {
        warrior.allAttack();
        archer.allAttack();
        mage.allAttack();
        specialBar.style.animation = "";
        if (game.finalBoss === false) {
            dinoHpBar.style.width = `${dino.hp -= 20}%`;
            slimeHpBar.style.width = `${slime.hp -= 20}%`;
            snakeHpBar.style.width = `${snake.hp -= 20}%`;
        } else if (game.finalBoss === true) {
            lizHpBar.style.width = `${lizard.hp -= 20}%`
            dragHpBar.style.width = `${dragon.hp -= 20}%`
        }
    }
});
span.addEventListener("click", () => {
    modal.style.display = "none";
})
musicPlay.addEventListener("click",() => {
    music.play();
})
musicPause.addEventListener("click",() => {
    music.pause();
})
howToPlay.addEventListener("click", () => {
    music.play(); 
    modal.style.display = "block";
})

window.addEventListener("click", (event)=> {
    if (event.target == modal) {
      modal.style.display = "none";
    }
})

healButton.addEventListener("click", () => {
    if (game.healReady===true) {
        mage.healthGain();
        warrior.healthGain();
        archer.healthGain();
        healBar.style.animation = "";
        body.style.animation = "healFlash 2s";
        if (warrior.hp >= 70) {
            warriorHpBar.style.width = `${warrior.hp =100}%`
        } else {
            warriorHpBar.style.width = `${warrior.hp += 30}%`
        }
        if (archer.hp >= 70) {
            archerHpBar.style.width = `${archer.hp = 100}%`
        } else {
            archerHpBar.style.width = `${archer.hp += 30}%`
        } if (mage.hp >= 70) {
            mageHpBar.style.width = `${mage.hp = 100}%`
        } else {
            mageHpBar.style.width = `${mage.hp += 30}%`
        }
        setTimeout(() => {
            body.style.animation = "";
        }, 2000)
    }
});
// Enemy(sheetWidth, sheetHeight, cols, rows, x, y, name, attackPos,attkRate,strength)
const enemies = [
    [
        lizard = new Enemy(1240,453,5,3,canvas.width*.25,210,"lizard",1,2.20,15)
    ],
    [
        dragon = new Enemy(1290,1045,5,5,canvas.width*.06,225,"dragon",1,2,21.5)
    ],
    [
        slime = new Enemy(705,535,5,5,canvas.width*.25,245,"slime",3,2.50,9)
    ],
    [
        snake = new Enemy(735,376,5,4,canvas.width*.25,370,"snake",1,3.25,8)
    ],
    [
        dino = new Enemy(770,472,5,4,canvas.width*.10,300,"dino",2,2.75,10)
    ],
]
// Player(sheetWidth, sheetHeight, cols, rows, x, y, name, attackPos,attkRate,strength)
warrior = new Player(1200,416,5,4,canvas.width*.55,300,"warrior",1,2.50,10);
archer = new Player(1264,1038,8,6,canvas.width*.75, 310,"archer",4,3.50,5.5);
mage = new Player(966,636,6,6,canvas.width*.75,250,"mage",4,2,15);

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
    }; 
}, 100)




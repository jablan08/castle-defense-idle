

const imgs = ["imgs/sprites/war.spread.png", "imgs/sprites/archer.png", "imgs/sprites/mage.png"];
const enemyImgs = ["imgs/sprites/enemy.lizard.png", "imgs/sprites/enemy.dragon.png","imgs/sprites/enemy.slime.png","imgs/sprites/enemy.snake.png", "imgs/sprites/enemy.dino.png"];
let hit = false;




// Player
function Player(sheetWidth, sheetHeight, cols, rows, x, y, name, attackPos,attkRate,strength) {
    this.srcX; 
    this.srcY;
    this.attackPos = attackPos;
    this.idlePos = 0;
    this.sheetWidth = sheetWidth;
    this.sheetHeight = sheetHeight;
    this.cols = cols;
    this.rows = rows;
    this.frameWidth = sheetWidth / cols;
    this.frameHeight = sheetHeight / rows;
    this.currentFrame = 0;
    this.image = new Image();
    this.image.src;
    this.name = name;
    this.x = x;
    this.y = y;
    this.attackReady = false;
    this.attkSpeed = 1;
    this.attkRate = attkRate;
    this.strength = strength;
    this.hp = 100;
    this.keyboarder = new Keyboarder();
    this.draw = function() {
        cxt.drawImage(this.image, this.srcX, this.srcY, this.frameWidth, this.frameHeight, this.x,this.y,this.frameWidth,this.frameHeight)
    }
// Motion
    this.playerMotion = function() {
        if (this.attackReady === false)
        {this.currentFrame = ++this.currentFrame % this.cols;
        this.srcX = this.currentFrame * this.frameWidth;
        this.srcY = this.idlePos * this.frameHeight;}
    }
// Full player update
    this.update = function() {
        this.playerImage();
        this.playerMotion();
        this.draw();
        this.playerBars();
        this.attackFrame();
        

    }
    this.playerBars = function() {
        if (this.attkSpeed >= 100) {
            this.attackReady = true;
            this.attack();
            this.attkSpeed = 1;
            warAttkBar.style.width = this.attkSpeed + '%' 
            archerAttkBar.style.width = this.attkSpeed + '%'; 
            mageAttkBar.style.width = this.attkSpeed + '%'; 
        } else {
            this.attkSpeed+= this.attkRate; 
            warAttkBar.style.width = warrior.attkSpeed + '%'
            archerAttkBar.style.width = archer.attkSpeed + '%'; 
            mageAttkBar.style.width = mage.attkSpeed + '%';
        }
    }
    this.attackFrame = function() {
        //auto attack
        //
        if (this.attackReady === true){
            
            this.currentFrame = ++this.currentFrame % this.cols;
            this.srcX = this.currentFrame * this.frameWidth;
            this.srcY = this.attackPos * this.frameHeight;
            
        setTimeout(()=> {
            this.attackReady = false
            }, 750)
        }
        
    }
    this.attack = function(){
        if (game.target=== "Dino") {
            console.log("hit Dino")
            dinoHpBar.style.width = `${dino.hp -= this.strength}%`;
        } else if (game.target==="Slime") {
            console.log("hit Slime")
            slimeHpBar.style.width = `${slime.hp -= this.strength}%`;
        } else if (game.target==="Snake") {
            console.log("hit Snake")
            snakeHpBar.style.width = `${snake.hp -= this.strength}%`;
        } 
    }
    
    this.playerImage = function() {
        if (this.name === "warrior") {
            this.image.src =imgs[0]  
        } else if (this.name === "archer") {
            this.image.src = imgs[1]
        } else if (this.name === "mage") {
            this.image.src = imgs[2]
        }
    }

}



// Enemies
function Enemy(sheetWidth, sheetHeight, cols, rows, x, y, name, attackPos,attkRate,strength) {
    this.srcX; 
    this.srcY;
    this.attackPos = 1;
    this.idlePos = 0;
    this.sheetWidth = sheetWidth;
    this.sheetHeight = sheetHeight;
    this.cols = cols;
    this.rows = rows;
    this.frameWidth = sheetWidth / cols;
    this.frameHeight = sheetHeight / rows;
    this.currentFrame = 0;
    this.image = new Image();
    this.image.src;
    // archer.image.src = imgs/sprites[3];
    // mage.image.src = imgs/sprites[4];
    this.name = name;
    this.x = x;
    this.y = y;
    this.attackReady = false;
    this.attkSpeed = 1;
    this.attkRate = attkRate;
    this.strength = strength;
    this.attackPos = attackPos;
    this.alive = true;
    // this.dx = 0;
    // this.dy = 0;
    // this.radius = 40;
    this.hp = 10;
    this.keyboarder = new Keyboarder();
    this.draw = function() {
        cxt.drawImage(this.image, this.srcX, this.srcY, this.frameWidth, this.frameHeight, this.x,this.y,this.frameWidth,this.frameHeight)
    }
// Movement
    this.enemyMotion = function() {
        if (this.attackReady===false)
        {this.currentFrame = ++this.currentFrame % this.cols;
        this.srcX = this.currentFrame * this.frameWidth;
        this.srcY = this.idlePos * this.frameHeight;}
    }
    this.update = function() {
        if (this.alive ===true){
        this.enemyImage();
        this.enemyMotion();
        this.draw();
        this.enemyBars();
        this.attackFrame();
        this.checkDead();
        }
        

    }
    this.enemyBars = function() {
        if (this.attkSpeed >= 100) {
            this.attackReady = true;
            this.attack();
            this.attkSpeed = 1;
            dinoAttkBar.style.width = this.attkSpeed + '%'; 
            slimeAttkBar.style.width = this.attkSpeed + '%'; 
            snakeAttkBar.style.width = this.attkSpeed + '%'; 
            lizAttkBar.style.width = this.attkSpeed + '%'; 
            dragAttkBar.style.width = this.attkSpeed + '%'; 
        } else {
            this.attkSpeed+= this.attkRate; 
            dinoAttkBar.style.width = dino.attkSpeed + '%'; 
            slimeAttkBar.style.width = slime.attkSpeed + '%'; 
            snakeAttkBar.style.width = snake.attkSpeed + '%'; 
            lizAttkBar.style.width = lizard.attkSpeed + '%'; 
            dragAttkBar.style.width = dragon.attkSpeed + '%'; 

        }
    }
    
    this.attackFrame = function() {
        if (this.attackReady === true){
            this.currentFrame = ++this.currentFrame % this.cols;
            this.srcX = this.currentFrame * this.frameWidth;
            this.srcY = this.attackPos * this.frameHeight;
            
        setTimeout(()=> {
            this.attackReady = false;
            }, 670)
        }
        
    }
    this.attack = function() {
        let random = Math.floor(Math.random()*3);
        if (game.CPUtarget[random]==="warrior"){
            warriorHpBar.style.width = `${warrior.hp -= this.strength}%`;
            // console.log(`${this.name}hit the warrior`)
        } else if (game.CPUtarget[random]==="archer"){
            archerHpBar.style.width = `${archer.hp -= this.strength}%`;
            // console.log(`${this.name}hit the archer`)
        } else if (game.CPUtarget[random]==="mage"){
            mageHpBar.style.width = `${mage.hp -= this.strength}%`;
            // console.log(`${this.name}hit the mage`)
        }
    }
    this.checkDead = function(){
        if (this.hp <= 0){
            this.alive = false;    
        }
    }
    this.enemyImage = function() {
        if (this.name === "lizard") {
            this.image.src =enemyImgs[0]  
        } else if (this.name === "dragon") {
            this.image.src = enemyImgs[1]
        } else if (this.name === "slime") {
            this.image.src = enemyImgs[2]
        } else if (this.name === "snake") {
            this.image.src = enemyImgs[3]
        } else if (this.name === "dino") {
            this.image.src = enemyImgs[4]
        }
    }
}

// function Enemy() {
//     let srcX; 
//     let srcY;
//     let attackPos = 1;
//     let getHit = 2;
//     let idlePos = 0;
//     let sheetWidth = 1240;
//     let sheetHeight = 453;

//     let cols = 5;
//     let rows = 3;
//     this.frameWidth = sheetWidth / cols;
//     this.frameHeight = sheetHeight / rows;
//     this.currentFrame = 0;
//     this.image = new Image();
//     this.image.src = imgs/sprites[0];
//     this.velocity = 10;
//     this.name = name;
//     this.x = Math.random()*(innerWidth - this.frameWidth*2)+this.frameWidth;
//     this.y = 250;
//     this.hp = Math.floor((Math.random())* 4)+1;
//     this.draw = function() {
//         cxt.drawImage(this.image, srcX, srcY, this.frameWidth, this.frameHeight, this.x,this.y,this.frameWidth,this.frameHeight)
   
//     }
// // Auto movement 
//     this.enemyMotion = function() {
//         if (this.x + this.frameWidth >= innerWidth) {
//             this.velocity = -this.velocity;
//             this.image.src = imgs/sprites[1];
//         } else if(this.x <= 0 ) {
//             this.image.src = imgs/sprites[0];
//             this.velocity = -this.velocity;
//         }
//         this.x += this.velocity; 
//     }
//     this.enemyPostionState = function() {
//         if (hit === true) {
//             console.log("enemy got hit")
//             // currentFrame = ++currentFrame % cols;
//             if (this.image.src === "file:///Users/mioji/seiLA/rpg_game/imgs/sprites/enemy.flip.png"){
//                 // console.log("worked!")
//                 srcX = 1 * this.frameWidth;
//                 srcY = getHit * this.frameHeight;
//                 this.x += 21;
//             } else
//             srcX = 3 * this.frameWidth;
//             srcY = getHit * this.frameHeight;
//             this.x -= 12;
//         } else {
//             this.currentFrame = ++this.currentFrame % cols;
//             srcX = this.currentFrame * this.frameWidth;
//             srcY = idlePos * this.frameHeight; 
//         } 
//     }
//     this.update = function() {
//         this.enemyPostionState();
//         this.draw();
//         this.enemyMotion();  
//     }
// }

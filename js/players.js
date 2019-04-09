

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
    this.special = 1;
    this.heal = 1;
    this.alive = true;
    this.hp = 100;
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
        if (this.alive === true){
        this.playerImage();
        this.playerMotion();
        this.draw();
        this.playerBars();
        this.attackFrame();
        this.checkDead();
        this.specialHealBars();
        }

    }
    this.checkDead = function(){
        if (this.hp <= 0){
            this.alive = false;   
        }
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

    this.specialHealBars = function (){
        if (this.special>=100){
            game.specialReady = true;
            
        } else {
            this.special +=.25
            specialBar.style.width = this.special + '%' 
        }
        if (this.heal >=100){
            game.healReady = true;
            
        } else {
            this.heal +=.15
            healBar.style.width = this.heal + '%' 
        }
    }
    this.allAttack = function() {
        game.specialReady = false;
        this.special = 1;
        specialBar.style.width = this.special + '%' 
        this.attackReady = true;
        this.currentFrame = ++this.currentFrame % this.cols;
        this.srcX = this.currentFrame * this.frameWidth;
        this.srcY = this.attackPos * this.frameHeight;
            
        setTimeout(()=> {
            this.attackReady = false
            }, 750)
        
        
        
    }
    this.healthGain = function() {
        game.healReady = false;
        this.heal = 1;
        healBar.style.width = this.heal + '%' 
        warriorHpBar.style.width = `${warrior.hp += 30}%`
        archerHpBar.style.width = `${archer.hp += 30}%`
        mageHpBar.style.width = `${mage.hp += 30}%`
        this.alive = true;
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
            dinoHpBar.style.width = `${dino.hp -= this.strength}%`;
        } else if (game.target==="Slime") {
            slimeHpBar.style.width = `${slime.hp -= this.strength}%`;
        } else if (game.target==="Snake") {
            snakeHpBar.style.width = `${snake.hp -= this.strength}%`;
        } else if (game.target==="Lizard") {
            lizHpBar.style.width = `${lizard.hp -= this.strength}%`;
        } else if (game.target==="Dragon") {
            dragHpBar.style.width = `${dragon.hp -= this.strength}%`;
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
    this.attackPos = attackPos;
    this.alive = true;
    this.hp = 10;
    this.draw = function() {
        cxt.drawImage(this.image, this.srcX, this.srcY, this.frameWidth, this.frameHeight, this.x,this.y,this.frameWidth,this.frameHeight)
    }
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
        } else if (game.CPUtarget[random]==="archer"){
            archerHpBar.style.width = `${archer.hp -= this.strength}%`;
        } else if (game.CPUtarget[random]==="mage"){
            mageHpBar.style.width = `${mage.hp -= this.strength}%`;
        }
    }
    this.checkDead = function(){
        if (this.hp <= 0){
            this.alive = false;
            game.mobs -=1 
            game.wave();   
            game.deadEnemy();
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


const imgs = ["imgs/enemy.png", "imgs/enemy.flip.png", "imgs/war.spread.png", "imgs/archer.png", "imgs/mage.png"];
let hit = false;




// Player
function Player(sheetWidth, sheetHeight, cols, rows, x, y, name) {
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
    // archer.image.src = imgs[3];
    // mage.image.src = imgs[4];
    this.name = name;
    this.x = x;
    this.y = y;
    this.attackValue = 2;
    // this.dx = 0;
    // this.dy = 0;
    // this.radius = 40;
    this.hp = 10;
    this.keyboarder = new Keyboarder();
    this.draw = function() {
        cxt.drawImage(this.image, this.srcX, this.srcY, this.frameWidth, this.frameHeight, this.x,this.y,this.frameWidth,this.frameHeight)
    }
// Movement
    this.playerMotion = function() {
        this.currentFrame = ++this.currentFrame % this.cols;
        this.srcX = this.currentFrame * this.frameWidth;
        this.srcY = this.idlePos * this.frameHeight;
        
        // if (this.keyboarder.isDown(this.keyboarder.KEYS.LEFT)) {
        //     // console.log("left key press")
        //     this.image.src = imgs[2];
        //     this.x -=4 ;
        // } else if (this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT)) {
        //     this.image.src = imgs[3];
        //     this.x += 4;
        // }  else if (this.keyboarder.isDown(this.keyboarder.KEYS.SPACE)) {
        //     srcY = attackPos * this.frameHeight;
        //     this.attack();
        // } /*else if (this.keyboarder.isDown(this.keyboarder.KEYS.UP)) {
            
        //     this.y -= 4;
        // } else if (this.keyboarder.isDown(this.keyboarder.KEYS.DOWN)) {

        //     this.y += 4;
        // } */else {
            
        // }
    }
    this.update = function() {
        this.playerImage();
        this.playerMotion();
        this.draw();
        

    }
    this.attack = function() {
        // for (let i = 0; i <enemies.length; i++) {
        //     if (player1.x < enemies[i].x + enemies[i].frameWidth-100&&
        //         player1.x + player1.frameWidth-50> enemies[i].x){
        //         console.log("has hit!")
        //         enemies[i].hp -= this.attackValue;
        //         hit = true;
        //     } else {
                
        //     }
        // }
    }

    this.playerImage = function() {
        if (this.name === "warrior") {
            this.image.src =imgs[2]  
        }
    }

}

// Enemies
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
//     this.image.src = imgs[0];
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
//             this.image.src = imgs[1];
//         } else if(this.x <= 0 ) {
//             this.image.src = imgs[0];
//             this.velocity = -this.velocity;
//         }
//         this.x += this.velocity; 
//     }
//     this.enemyPostionState = function() {
//         if (hit === true) {
//             console.log("enemy got hit")
//             // currentFrame = ++currentFrame % cols;
//             if (this.image.src === "file:///Users/mioji/seiLA/rpg_game/imgs/enemy.flip.png"){
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

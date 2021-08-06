

var background1, background1Img
var fox, foxImg
var caveman1, caveman1Img
var caveman2, caveman2Img
var orange, orangeImg
var banana, bananaImg
var cave, caveImg
var background2, background2Img
var warrior1, warrior1Img
var warrior2, warrior2Img
var dagger, daggerImg
var enemy, enemyImg
var background3, background3Img
var level1Score = 0
var level1Death = 0


var END = 0
var PLAY = 1
var WIN = 2
var LEVEL1 = 5

var mode = LEVEL1;
var gameState = PLAY;


function preload() {
  //LEVEL1
  background1Img = loadImage("LEVEL1Img/background1.png")
  //background2Img=loadImage("LEVEL2Img/bg.jpg")
  // background3Img=loadImage("LEVEL3Img/space.jpg")
  foxImg = loadAnimation("LEVEL1Img/fox7.png", "LEVEL1Img/fox1.png", "LEVEL1Img/fox6.png",
    "LEVEL1Img/fox4.png", "LEVEL1Img/fox5.png", "LEVEL1Img/fox3.png", "LEVEL1Img/fox2.png")
  caveMan1Img = loadAnimation("LEVEL1Img/boy1.png", "LEVEL1Img/boy2.png", "LEVEL1Img/boy3.png")
 // caveMan2Img = loadImage("LEVEL1Img/boy6.png")
  orangeImg = loadImage("LEVEL1Img/orange.png")
  bananaImg = loadImage("LEVEL1Img/banana.png")
  caveImg = loadImage("LEVEL1Img/cave 1.png")
  //LEVEL2
  enemyImg = loadImage("LEVEL2Img/enemy.png")
  daggerImg = loadImage("LEVEL2Img/knfe.png")
  warrior1Img = loadAnimation("LEVEL2Img/level2 PC1.png", "LEVEL2Img/level2 PC2.png")
  warrior2Img = loadImage("LEVEL2Img/level2 PC1.png")

}



function setup() {
  createCanvas(1300, 400)
  background1 = createSprite(860, 200, 20, 20)
  background1.addImage(background1Img)


  caveMan1 = createSprite(200, 200, 20, 20)
  caveMan1.addAnimation("run", caveMan1Img)
  caveMan1.scale = 0.5

  invisibleGround = createSprite(200, 350, 1000, 10)
  invisibleGround.visible = false;

  foxGroup = new Group();
  fruitGroup = new Group();
}

function draw() {


  if (gameState === PLAY) {
    if (background1.x < 430) {
      background1.x = width / 2;
    }
    background1.velocityX = -3


    if (keyDown(UP_ARROW)) {
      //caveMan2.visible=true
      // caveMan2.addImage(caveMan2Img)
      // caveMan1.visible=false
      caveMan1.velocityY = -13;
    }
    caveMan1.velocityY = caveMan1.velocityY + 0.8

    spawnFox();
    spawnFruitS();
  
    caveMan1.collide(invisibleGround)
   

    if(foxGroup.isTouching(caveMan1)){
      gameState = END;
  }

  }
  else if (gameState === END) {
    background1.velocityX = 0
    foxGroup.setVelocityXEach(0);
    fruitGroup.setVelocityXEach(0);

  }



  drawSprites();

}













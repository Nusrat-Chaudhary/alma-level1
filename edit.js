



    background2=createSprite(860,200,20,20)
    background3=createSprite(860,200,20,20)
 
 

    
    caveMan2=createSprite(200,200,20,20)
    caveMan2.addImage(caveMan2Img)
    caveMan2.scale=0.5

    foxGroup=new Group()
    fruitGroup=new Group()
    level1Score=0;
    level1Death=0;
    
function draw() {
    background(0)
    

       levelOne();
       spawnFruitS();
       spawnFox()
       
       if(frameCount%200===0){


        console.log("hello")

        cave=createSprite(1000, 200,20,20)
        cave.setCollider("rectangle",0,0,10,200)
        cave.debug=true
        
        cave.y = Math.round(random(200, 300))
        cave.addImage(caveImg)
        cave.velocityX=-7
        /*invisibleCave=createSprite(1000,200,20,20)
        invisibleCave.velocityX=-7
        invisibleCave.depth= cave.depth
        cave.velocityX=invisibleCave.velocityX
        invisibleCave.depth=invisibleCave.depth+1
        invisibleCave.y = Math.round(random(200, 300))*/
 
        //caveMan2.depth= cave.depth
       // caveMan2.depth=caveMan2.depth+1
        //.depth= cave.depth
        //caveMan1.depth=caveMan1.depth+1

    //    if(cave.isTouching(caveman1) ||cave.isTouching(caveman2) ){
    //     gameState=WIN
    // }

    
        }
       

      if(keyDown("F")){
        gameState=WIN
      }
       if (level1Death===1){
        gameState=END
      }
      
       
       
   }else if(gameState===END){
   
    caveMan1.visible=false
    caveMan2.visible=false
    
       if(keyDown("R")){
          restart1();
       }
   }else if(gameState===WIN){
    background1.velocityX=0
   // caveman1.destroy();
     if(keyDown("N")){
         gameState=PLAY2
     }

     textSize(40);
     fill("green");
     text("YOU WIN ",450,200);
     textSize(20);
     fill("turquoise");
     text("press 'N' for next level ",450,200);

   }else if(gameState===PLAY2){
      levelTwo();
      
   }else if(gameState===END){
    textSize(40);
    fill("RED");
    text("YOU LOST ",450,200);
    textSize(20);
    fill("TURUOISE");
    text("Press 'R' to restart",450,240)
}
   
    drawSprites()

textSize(20);
fill("BLUE");
text("FOOD: "+ level1Score,250,30);

textSize(20);
fill("RED");
text("DEATH "+ level1Death,150,30); 


// if(gameState===WIN){
//     textSize(40);
//     fill("green");
//     text("YOU WIN ",450,200);
//     textSize(20);
//     fill("turquoise");
//     text("press 'N' for next level ",450,200);
// }
}

function levelOne(){
    
   
 
   
  //visiblity
  //caveMan2.visible=false
  caveMan1.visible=true
  invisibleGround.visible=false
  //gravity for caveman
  caveMan2.velocityY = caveMan2.velocityY + 0.8
  caveMan2.collide(invisibleGround)
  caveMan1.y=caveMan2.y
  //jump

  

}


function restart1()  {
    gameState=PLAY
    background1.velocityX=-4
    caveMan1.visible=true
    caveMan2.visible=true

    background1.velocityX=-3
    level1Death=0
    level1Score=0
    if(background1.x < 380 )
  {
    background1.x = width/2;
  }

}


function levelTwo(){
    
    background2.addImage(background2Img)

    
}
function levelThree(){
   
    background3.addImage(background3Img)
    background3.scale=5.5
    
}  
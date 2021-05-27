
var horse1, horse2 , horse3, horse4
var horse1Image, horse2Image , horse3Image, horse4Image, grassImage, grass
var wall, tracker1, tracker2, tracker3, tracker4
function preload() {
  horse1Image=loadImage("horse1.png")
  horse2Image=loadImage("horse2.png")
  horse3Image=loadImage("horse3.png")
  horse4Image=loadImage("horse4.png")
  grassImage=loadImage("Grass.png")
}

function setup(){
 createCanvas(displayWidth-50,displayHeight-200);

 grass=createSprite(500,300)
 grass.addImage("grass",grassImage,displayWidth-50,displayHeight-200)
 grass.scale=5

 
  horse1=createSprite(10,100)
  horse1.addImage("horse1",horse1Image)
  horse1.scale=0.2
  horse2=createSprite(10,220)
  horse2.addImage("horse2",horse2Image)
  horse2.scale=0.10
  horse3=createSprite(10,340)
  horse3.addImage("horse3",horse3Image)
  horse3.scale=0.2
  horse4=createSprite(10,460)
  horse4.addImage("horse4",horse4Image)
  horse4.scale=0.2

}

function draw(){
 
  horse1.velocityX=0
  horse1.velocityY=0

  camera.position.x=horse1.x+400
  camera.position.y=horse1.y+170
  
 
  if(keyIsDown(RIGHT_ARROW)){
    horse1.velocityX=5
    
  }

  if(frameCount%200===0){
   wall=createSprite(2000,300,20,1000)
  }if (frameCount%15===0){
    horse2.velocityX=random(3,7)
    horse3.velocityX=random(3,7)
    horse4.velocityX=random(3,7)
    
  } 

if (wall){
  if(wall.isTouching(horse2)){
    horse2.velocityX=0
  }if(wall.isTouching(horse3)){
    horse3.velocityX=0
  }if(wall.isTouching(horse4)){
    horse4.velocityX=0
  }if(wall.isTouching(horse1)){
    horse1.velocityX=0
  }
}
 

 

  drawSprites()
}


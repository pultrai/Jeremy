var player, bg;


function preload(){
  playerImg=loadImage("Jeremy.png");
  bgImg=loadImage("lake.jpg");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight)
  

  bg=createSprite(0,0,windowWidth,windowHeight);
  bg.addImage(bgImg);
  bg.scale=4.5;

  player=createSprite(200,700,100,100);
  player.addImage(playerImg);
  player.scale=0.5;

} 

function draw() {
  background(0); 
  //Image(bgImg,0,0,windowWidth,windowHeight);

if(keyDown("UP_ARROW")||touches.length>0){
  //player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
  //player.y = player.y+30
}

drawSprites();

}

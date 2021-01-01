



function preload(){
 //load your images here 
 bgImg= loadImage("background0.png");
 blueImg=loadImage("blue_balloon0.png")
 redImg=loadImage("red_balloon0.png")
 pinkImg=loadImage("pink_balloon0.png")
 greenImg=loadImage("green_balloon0.png")
  bowImg=loadImage("bow0.png")
  arrowImage=loadImage("arrow0.png")
  whoosh=loadSound("whoosh.wav")
}

function setup() {
  createCanvas(600, 600);
  bgSprite=createSprite(width/2, height/2)
  bgSprite.addImage(bgImg);
  bgSprite.scale=3;
  bgSprite.velocityX=-2
  

//bow sprite
bow=createSprite(width-50, height/2)
bow.addImage(bowImg)
bow.scale=1.3
}

function draw() {
  background(0);
  drawSprites();
  bow.y=mouseY;

  if(bgSprite.x<0)
   bgSprite.x=bgSprite.width/2;
  //add code here
  if(keyDown("space"))
  {
    var temp_arrow=createArrow();
    temp_arrow.addImage(arrowImage);
    temp_arrow.y=bow.y;
    whoosh.play();
  }
  var select_balloon=Math.round(random(1,4));

  if(frameCount%80==0)
  {
    if(select_balloon==1)
      redB();
    else if(select_balloon==2)
      pinkB();
    else if(select_balloon==3)
      greenB();
    else
      blueB();
  }

  
}
function pinkB()
{
  
  pinkBal=createSprite(0, Math.round(random(20, height-20)));
  pinkBal.addImage(pinkImg);
  pinkBal.scale=1.3
  pinkBal.velocityX=4;
  pinkBal.lifetime=200;
  
}
function redB()
{
  redBal=createSprite(0, Math.round(random(20, height-20)));
  redBal.addImage(redImg);
  redBal.scale=0.1;
  redBal.velocityX=4;
  redBal.lifetime=200;
  
}
function blueB()
{
    blueBal=createSprite(0, Math.round(random(20, height-20)));
    blueBal.addImage(blueImg);
    blueBal.scale=0.1
    blueBal.velocityX=4;
    blueBal.lifetime=200;
}
function greenB()
{
  
    greenBal=createSprite(0, Math.round(random(20, height-20)));
    greenBal.addImage(greenImg);
    greenBal.scale=0.08
    greenBal.velocityX=4;
    greenBal.lifetime=200;
  
}
function createArrow()
{
  arrow=createSprite(width-50, 100)
  arrow.velocityX=-6;
  arrow.scale=0.3;
  return arrow;
}